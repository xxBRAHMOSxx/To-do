import RegisterForm from "../components/RegisterForm"


const Register = () => {
  return (
    <div>
        <div className="flex flex-col items-center bg-primary  justify-center h-screen">
            <h1 className='text-4xl font-bold mb-8'>Register</h1>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default Register