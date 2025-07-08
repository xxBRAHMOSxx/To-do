
const Update = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className='text-4xl font-bold mb-8'>Update Task</h1>
      <div className='flex flex-col h-100 w-200 bg-gray-100 p-4 rounded-lg shadow-md overflow-y-auto m-2'>
        <div className="flex w-full h-15 bg-white p-4 rounded-lg shadow-md items-center justify-center">
          {/* Placeholder for task title input */}
        </div>
        <div className="flex w-full h-50 mt-2 bg-white rounded-lg shadow-md">
          <input className="flex m-2 bg-gray-50 w-full h-1/2 " type="text" />
        </div>
        <div className=' flex items-center justify-center mt-4'>
          <button 
            className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300'
            onClick={() => alert('Update functionality not implemented yet')}>
            Update Task
          </button>
          <button
            className='bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ml-4'>
            delete task
          </button>
          </div>
      </div>
    </div>
  )
}

export default Update