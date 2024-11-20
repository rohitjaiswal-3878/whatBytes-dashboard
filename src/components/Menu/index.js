import { FiBarChart2 } from "react-icons/fi";
import { BiFileBlank } from "react-icons/bi";
import { LiaCertificateSolid } from "react-icons/lia";

export default function Menu() {
  return (
    <div className="border-r-2 h-[100%] w-[310px] ">
      <div className="mt-[25%] pr-3 flex flex-col gap-2">
        <div className="flex h-20 items-center px-6 gap-4 rounded-r-full cursor-pointer">
          <FiBarChart2 className="text-3xl" />
          <span className="text-[22px] font-bold text-[#50545E]">
            Dashboard
          </span>
        </div>
        <div className="flex  h-20 items-center px-6 gap-4 rounded-r-full bg-[#F4F6F8] cursor-pointer ">
          <LiaCertificateSolid className="text-3xl text-[#4C58D2]" />
          <span className="text-[22px] font-bold text-[#4C58D2]">
            Skill Test
          </span>
        </div>
        <div className="flex  h-20 items-center px-6 gap-4 rounded-r-full">
          <BiFileBlank className="text-3xl cursor-pointer" />
          <span className="text-[22px] font-bold text-[#50545E]">
            Internship
          </span>
        </div>
      </div>
    </div>
  );
}
