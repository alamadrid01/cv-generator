import React,{useContext} from 'react'
import pic from './assets/pic.jpg';



function SectionOne() {

  return (
    <div>
         <main className="flex bg-blue-900 px-3 py-5">
        <div className="text flex-col flex px-20 w-[20%] justify-center items-center flex-auto">
          <h1 className='font-bold text-3xl  text-white'>Create a Job-Landing Cover Letter in seconds</h1>
          <p className='text-white '>100% Automated and Free</p>
        </div>
        <div className="shape  flex-auto">
            <img className='w-80  h-80' src={pic} alt="picture" />
        </div>
      </main>

    </div>
  )
}

export default SectionOne