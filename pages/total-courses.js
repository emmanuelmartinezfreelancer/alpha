import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link'


export default function TotalCourses() {

    return(

        <>

        <div class="grid grid-cols-4 gap-4 px-72 mt-64">

            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c1.png")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Character creation for games</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Character creation for games",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >                  
                        
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c2.jpg")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Fundamentals Environment Design</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Fundamentals Environment Design",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >                           
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c3.jpg")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Introduction Substance designer</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Introduction Substance designer",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >     
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c4.jpg")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Modeling and texturing Props for games</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Modeling and texturing Props for games",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >   
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c5.png")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Environment Design</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Environment Design",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >   
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c6.png")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Fundamentals Environment Design</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Fundamentals Environment Design",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >   
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c7.png")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Grooming for games</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Grooming for games",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >   
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>


            <div className="w-full h-[550px] rounded-3xl text-white bg-cover bg-center"
            style={{ 
                backgroundImage: `url("./bg/c8.png")`,
              }} 
            >                     

                <div className="flex flex-col rounded-3xl relative w-full h-full bg-gradient-to-t from-black to-transparent p-8">
              
                <p className="font-bold absolute">Starts on 24 January 2023</p>

                <div className="flex flex-col bottom-8 gap-2 absolute pr-4">
                    
                    <h1 className="text-xl uppercase font-bold">Lighting in Unreal Fundamentals</h1>
                    <p className="text-lg font-light">Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit</p>
                    <div className="flex flex-row text-[#EF7D00] font-semibold text-base">
                        <p>Learn More</p>
                        <Link
                          href={{
                            pathname: '/course-detail',
                            query: {
                                name: "Lighting in Unreal Fundamentals",
                                coursedetail: "Lorem ipsum dolor sit amet, dorum sem ortes nomber lockdow mer consectetur adipiscing elit"
                             }// the data
                          }}
                        >   
                        <FiArrowRight className="my-auto ml-2 text-2xl"/>
                        </Link>
                    </div>
                </div>

                </div>

            </div>
            
        </div>

        <button 
            className="mx-auto mt-12 w-3/12 mb-36 px-6 border bg-[#0060EF] py-6 text-white hover:text-black hover:bg-white text-lg rounded-xl shadow hover:shadow-lg outline-none focus:outline-none"
            type="button">
            Cargar más
        </button>
        
        
        </>

    )




}