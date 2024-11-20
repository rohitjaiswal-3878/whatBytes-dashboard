export default function Navbar() {
  return (
    <div className="border-b-2 h-24 w-[100%] flex justify-between items-center px-7">
      <div className="w-[300px] h-11 flex items-center gap-3">
        <img src="/logo.png" alt="" className="h-[100%]" />
        <span className="text-4xl font-[900]">WhatBytes</span>
      </div>

      <div className="border-2 w-auto h-12 rounded-md px-1 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://rohitjaiswal.netlify.app/assets/profileIcon-CahIuunm.jpeg"
            alt=""
            className="h-[100%]"
          />
        </div>
        <span className="text-[20px] font-bold">Rohit Jaiswal</span>
      </div>
    </div>
  );
}
