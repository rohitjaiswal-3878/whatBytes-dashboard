export default function MainSection() {
  return (
    <div className="h-[92%] px-12 py-8 pr-6 overflow-auto">
      <p className="text-[#5A5A5A] text-[22px] font-[550]">Skill Test</p>

      <div className="w-[100%] flex mt-8 gap-12">
        <div className="flex flex-col gap-7 w-[60%] pf-[2px]">
          <div className="h-36 border-2 rounded-lg"></div>
          <div className="h-40 border-2 rounded-lg"></div>
          <div className="h-[1000px] border-2 rounded-lg mb-10 "></div>
        </div>
        <div className="flex flex-col gap-7 w-[45%]">
          <div className="h-[600px] border-2 rounded-lg"></div>
          <div className="h-[350px] border-2 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
