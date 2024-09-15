"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { MdOutlineFileCopy } from "react-icons/md";
import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";




export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {


  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["NextJs", "ReactNative", "GraphQL"];

  const [copied, setcopied] = useState(false)

  const copyEmail = ()=>{
    navigator.clipboard.writeText("ahtishamulhassan128@gmail.com")
    console.log("copy");
    setcopied(true)

    setTimeout(()=>{
       setcopied(false)
    },2000)
    
  }
  return (
    <div
      className={cn(
        "row-span-1 overflow-hidden relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}

      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={` flex justify-center h-full`}>

         <div className="absolute w-full h-full overflow-hidden">
           {img && (
            <img
            alt="image"
            src={img}
            className={cn(imgClassName,"object-cover object-center")}
            />
           )}
         </div>

         <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80 h-full"}`}>
           {spareImg && (
             <img
             alt="spareImg"
             src={spareImg}
             className={`object-cover object-center w-full h-full`}
             />
           )}
         </div>

         {id === 6 && (
          
          <BackgroundGradientAnimation className="w-full object-cover">
            <div className="absolute z-[100] inset-0 flex items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl"> {id === 6 && (
              <div className="flex flex-col justify-between items-center ">
              <h2 className="font-sans font-bold lg:text-3xl max-w-96 z-10 p-3 text-2xl"> {title}</h2>

             <button onClick={copyEmail} className="mt-3 mb-3 cursor-pointer relative text-sm overflow-hidden rounded-sm p-[1px] h-10 ">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-sm bg-black-200 backdrop-filter backdrop-blur-md px-4 bg-opacity-85 text-md font-medium text-white">
                {copied? <BsCheckLg/>:<MdOutlineFileCopy/>}  Copy my email address
              </span>
            </button>
            </div>
            )} 
            </div>
          </BackgroundGradientAnimation>
           
         )}

        <div className={cn(titleClassName,` group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col ${id !== 2 && "z-50"}`)}>
          {description !== "" && (
            <div className="font-sans font-extralight text-[#c1c2d3] max-w-96 text-sm md:text-xs lg:text-base z-10 px-7">
             {description}
           </div>
          )} 
           

           {id !== 6 && (
              <div className={`font-sans font-bold ${id === 4 || id === 2? "lg:text-2xl": "lg:text-4xl"} text-xl md:max-w-[450px] max-w-96 z-50 ${id} p-5 px-7`}>
              {title}
              </div>
           )}

        </div>   

        {id === 2 && <GlobeDemo/>}  

        {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                {/* tech stack lists */}
                <div className="flex flex-col gap-2">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="md:p-5 p-4 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132e7c]"
                    >
                      {item}
                    </span>
                  ))}
                
                </div>

                <div className="flex flex-col gap-2">
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="md:p-5 p-4 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132e7c]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
        )}

      </div>
   
    </div>
  );
};
