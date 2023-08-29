import Marquee from "react-fast-marquee";

function DynamicMarquee() {
  return (
    <div className="bg-slate-900">
      <div className="relative h-32 w-full transform flex flex-col items-center justify-center overflow-hidden z-10 bg-slate-900">
        <Marquee
          className="h-1/4 flex flex-col overflow-y-hidden"
          autoFill
          direction="right"
          speed={70}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="h-8 w-5 skew-x-12 bg-purple-800 mx-2"></div>
            <div className="h-8 w-5 -skew-x-12 bg-purple-800 mx-2"></div>
          </div>
        </Marquee>
        <Marquee
          className=" flex flex-row items-center justify-around -translate-x-[10vw] h-1/2 overflow-y-hidden"
          autoFill
        >
          <button className="hover:scale-110">
            <div className="flex flex-row mx-12 justify-center items-center">
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-2"></div>
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-3"></div>
              <span className="text-white font-bold text-4xl">芯片控制</span>
            </div>
          </button>
          <button className="hover:scale-110">
            <div className="flex flex-row mx-12 items-center">
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-2"></div>
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-3"></div>
              <span className="text-white font-bold text-4xl">硬件加速</span>
            </div>
          </button>
          <button className="hover:scale-110">
            <div className="flex flex-row mx-12 items-center">
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-2"></div>
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-3"></div>
              <span className="text-white font-bold text-4xl">電子工程</span>
            </div>
          </button>
          <button className="hover:scale-110">
            <div className="flex flex-row mx-12 items-center">
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-2"></div>
              <div className="h-[35px] w-3 -skew-x-12 bg-green-400 mr-3"></div>
              <span className="text-white font-bold text-4xl">產品設計</span>
            </div>
          </button>
        </Marquee>
        <Marquee
          className="h-1/4 flex flex-col overflow-y-hidden"
          autoFill
          direction="left"
          speed={70}
        >
          <div className="flex flex-col overflow-hidden">
            <div className="h-8 w-5 -skew-x-12 bg-purple-800 mx-2"></div>
            <div className="h-8 w-5 skew-x-12 bg-purple-800 mx-2"></div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}
export default DynamicMarquee;
