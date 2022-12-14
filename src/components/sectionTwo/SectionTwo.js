import React, { useState, useContext, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Uploaded from "../uploaded/Uploaded";
import first from "./assets/first.svg";

function SectionTwo() {
  const [fileSize, setFileSize] = useState("");
  const [show, setShow] = useState(false);

  // const [fileLength, setFileLength] = useState('')
  const { file, setFile, fileName, setFileName } = useContext(UserContext);

  const changeHandler = (e) => {
    setFile(e.target.files);
    setFileName(e.target.files[0].name);
    setFileSize(e.target.files[0].size);
  };
  const fileValidation = () => {
    return (
      <h2 className="text-rose-600 font-semibold text-[13px]">
        The file too large. Please Upload a file with maximum of 5mb
      </h2>
    );
  };

  return (
    <div id="upload_section" className="px-1 z-20  relative flex flex-col items-center md:flex-rol bg-gray-100  py-[50px]">
      <main className="flex flex-col items-center  md:w-[98%] w-[90%]  md:flex-row md:mt-[60px]  ">
        <div className="left text-left text-gray-800  md:px-[14vh] md:w-[49%] w-[100%] mb-[20px] md:mb-09  flex flex-col justify-center items-center ">
          <h2 className="md:text-4xl text-[24px] font-bold leading-[3rem] mb-[11px]   ">
            Upload your CV/Resume to make a Cover Letter
          </h2>
          <p className="text-gray md:text-[22px] mt-2 text-[20px] text-[#666060] ">
            Maximum file size is 5MB, and you can only upload a maximum of 1
            file per upload session
          </p>
        </div>
        <div
          className={`right md:w-[540px] h-[443px] w-[100%] border-2 flex flex-col px-[8px] justify-center items-center md:ml-[3.5em] ${
            show ? "border-[#e42424]" : "border-[gray]"
          } border-dashed rounded-lg `}
        >
          <div className="uploadContainer relative flex flex-col md:px-[2vh] md:py-[15vh] py-[15vh]">
            {fileSize > 0 ? null : (
              <img
                src={first}
                className="w-[67px] relative left-[30%] md:left-[37%]  h-[67px]"
                alt=""
              />
            )}
            {fileSize > 0 && fileSize <5000000 ? null : (
              <input
                style={{ opacity: "0" }}
                // style={{ background: "red" }}
                type="file"
                accept="application/pdf"
                onChange={changeHandler}
                className="upload_file absolute cursor-pointer left-0 bottom-0 w-[100%] h-[100%] "
                id="upload_button"
              />
            )}

            {fileSize >0 && fileSize <5000000 ? (
              <Uploaded />
            ) : (
              <label for="upload_file" className="">
                <img src="" alt="" />

                <h3 className=" text-blue-700 md:text-[24px] mt-4 text-[20px] font-semibold">
                  Drag & Drop to Upload{" "}
                </h3>

                <p className="text-gray-500 text-[16px]">File Supported: PDF</p>
                {fileSize > 5000000 ? fileValidation() : null}
                <button className="text-blue-700 text-[16px] mt-3 font-bold ">
                  Or browse
                </button>
              </label>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SectionTwo;
