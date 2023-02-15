import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { useRouter } from 'next/router'
import { useState } from "react";


const CourseDetail = () => {

  const router = useRouter();
  const data = router.query;  

  const [courseTitle, setcourseTitle] = useState(data.name)
  const [courseDetails, setcourseDetails] = useState(data.coursedetail)
  

    return(
    <>  
    <Navbar/>

    <main className="flex flex-col w-full h-fit pt-[19px] bg-[#F2F2F2]"> 
    <div className="flex flex-row w-full h-screen px-36 pr-56">

            <div className="flex flex-col pr-44 pl-14 my-auto w-1/2">

                <h1 className="text-7xl font-semibold">{ courseTitle }</h1>
                <p className="text-2xl pt-14 pb-12">{courseDetails}</p>
                <button 
                 className="w-44 mb-2 px-6 border bg-black py-6 text-white hover:text-black hover:bg-white text-base rounded-lg shadow hover:shadow-lg outline-none focus:outline-none"
                 type="button">
                 View intro
                 </button>

            </div>
          
                
            <div className="bg-white rounded-lg border-2 border-black w-1/2 h-4/6 my-auto mx-auto z-99">
                <div className="flex flex-row p-4 gap-4">
                  <div className="rounded-full border border-black w-[15px] h-[15px]"></div>
                  <div className="rounded-full border border-black w-[15px] h-[15px]"></div>
                  <div className="rounded-full border border-black w-[15px] h-[15px]"></div>
                </div>
            </div>
                              


        </div>
    </main>


    </>
          )

}

export default CourseDetail