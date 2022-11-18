import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import  first from './assets/first.svg'
import  second from './assets/first.svg'
import  third from './assets/first.svg'
import  fourth from './assets/first.svg'

function SectionTwo() {
  const Navigate = useNavigate();
  const [fileSize, setFileSize] = useState('')
  const [show, setShow] = useState(false)

  // const [fileLength, setFileLength] = useState('')
  const { file, setFile, fileName, setFileName } = useContext(UserContext);

 
  const changeHandler = (e) => {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
    setFileSize(e.target.files[0].size)
  };
  
  const fileValidation =() =>{

    return <h2 className="text-rose-600 font-semibold text-[13px]">The file too large. Please Upload a file with maximum of 5mb</h2>

  }



  return (
    <div className="px-1 z-20  relative flex flex-col items-center md:flex-rol bg-gray-100  py-[50px]">
      <main className="flex flex-col items-center  md:w-[98%] w-[90%]  md:flex-row mt-[60px] ">
        <div className="left text-left text-gray-800  md:px-[14vh] md:w-[49%] w-[100%] mb-[20px] md:mb-09  flex flex-col justify-center items-center ">
          <h2 className="text-4xl font-bold leading-[3rem] mb-[11px]   ">
            Upload your CV/Resume to make a Cover Letter
          </h2>
          <p className="text-gray md:text-[22px] mt-2 text-[20px] text-[#666060] ">
            Maximum file size is 5MB, and you can only upload a maximum of 1
            file per upload session 
          </p>
        </div>
        <div className= {`right md:w-[40%] w-[100%] border-2 border-spacing-10 justify-center items-center md:ml-[3.5em] ${show ? 'border-[#e42424]' : 'border-[gray]'} border-dashed rounded-lg `}>
          <div className="uploadContainer relative flex flex-col md:px-[20vh] md:py-[15vh] py-[15vh]">
            {
              fileName && <h2 className="text-[22px] font-semibold text-blue-900 mb-4">You selected {fileName}</h2>
            }
            <img src={first} className='w-[67px] relative left-[37%]  h-[67px]' alt="" />
            <input
              style= {{ opacity: '0' }}
              type="file"
              accept="application/pdf"
              onChange={changeHandler}
              className="upload_file absolute  left-0 bottom-0 w-[100%] h-[100%] "
              id="upload_button"
            />
            <label for="upload_file" className="">
              <img src="" alt="" />
              <h3 className=" text-blue-700 md:text-[24px] mt-4 text-[20px] font-semibold">Drag & Drop to Upload </h3>
              <p className="text-gray-500 text-[16px]">File Supported: PDF</p>
              {
                fileSize > 10 ? fileValidation()  : null
              }
              <button className="text-blue-700 text-[16px] mt-3 font-bold ">Or browse</button>
            </label>

          </div>
        </div>
      </main >
  
    </div>
  );
}

export default SectionTwo;
