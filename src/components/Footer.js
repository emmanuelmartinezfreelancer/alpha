const Footer = () => {


    return(
        <div className="flex flex-col bg-[#F2F2F2] h-[600px] w-full px-12 py-3 justify-items-stretch">
                <div className="flex flex-row w-full pt-2 gap-6 my-auto justify-center text-lg justify-around px-40">
                    <p className="my-auto">Product</p>
                    <p className="my-auto">Features</p>
                    <p className="my-auto">Resources</p>
                    <p className="text-4xl uppercase mx-14 my-auto font-bold ">Trade</p>
                    <p className="my-auto">About</p>
                    <p className="my-auto">Blog</p>
                    <p className="my-auto">Support</p>
                </div>
                <div className="w-5/6 mx-auto mt-[-15px] border-t-2 border-black h-16"></div>

                <div className="flex flex-row w-full gap-9 my-auto text-lg justify-center mt-6">
                        <div className="rounded-full border border-black w-[60px] h-[60px]"></div>
                        <div className="rounded-full border border-black w-[60px] h-[60px]"></div>
                        <div className="rounded-full border border-black w-[60px] h-[60px]"></div>
                        <div className="rounded-full border border-black w-[60px] h-[60px]"></div>
                        <div className="rounded-full border border-black w-[60px] h-[60px]"></div>
                </div>

                <p className="w-full text-center pb-14">© 2010 — 2020 Privacy — Terms</p>


        </div>
          )

}

export default Footer