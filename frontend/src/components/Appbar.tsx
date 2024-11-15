import { Link } from "react-router-dom"


const Appbar = () => {
  return (
    <Link to={'/blogs'}>
    <div className="border-b flex justify-between items-center py-2 px-10">
      <h1 className="font-semibold ">Medium</h1>
      <div>
        <Link to = {'/publish'}>
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button>
        </Link>

    
      </div>
    </div>
    </Link>
  )
}

export default Appbar
