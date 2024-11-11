import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign, verify } from "hono/jwt";
import { createBlogInput,updateBlogInput } from "@himanshu14/medium-common";


export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
    userId: string;
  }
}>();

// middleware
blogRouter.use("/*",async (c,next)=>{
  try {
     const authHeader = c.req.header("authorization") || "";
     const user = await verify(authHeader, c.env.JWT_SECRET);
     if (user) {
       //@ts-ignore
       c.set("userId", user.id);
       await next();
     } else {
       c.status(403);
       return c.json({
         message: "You are not logged In",
       });
     }
  } catch (error) {
    c.status(403);
    return c.json({
      message: "You are not logged In",
      });
  }
    
     
})

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const success = createBlogInput.safeParse(body)
   if (!success) {
     c.status(411);
     return c.json({ error: "Invalid request body" });
   }
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: String(authorId),
    },
  });
  return c.json({
    id: blog.id
  })

});



blogRouter.put("/", async(c) => {
 const body = await c.req.json();
  const success = updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({ error: "Invalid request body" });
  }
 const prisma = new PrismaClient({
   datasourceUrl: c.env.DATABASE_URL,
 }).$extends(withAccelerate());

 const blog = await prisma.blog.update({

    where:{
        id:body.id
    },
   data: {
     title: body.title,
     content: body.content,
   },
 });
 return c.json({
   id: blog.id,
 });
});


blogRouter.get("get/:id",async(c)=>{
    const id = c.req.param("id")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try {
        const blog = await prisma.blog.findFirst({
        where:{
          id:id
        }
        });
        return c.json({
          blog,
        });
    } catch (error) {
        c.status(411);
        return c.json({
            message:"error whgile fetching blog post"
        })
    }

    
})


// TODO:pagination
blogRouter.get("/bulk", async(c) => {
 
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
   const blogs= await prisma.blog.findMany();
    return c.json({
      blogs
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "error whgile fetching blog post",
    });
  }
});
