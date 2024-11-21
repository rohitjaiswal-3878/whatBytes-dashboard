import { Doughnut, Scatter } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
export default function MainSection() {
  const data = {
    labels: ["Questions"],
    datasets: [
      {
        label: "Votes",
        data: [12, 3],
        backgroundColor: ["#2568F0", "#e0f0f0"],
      },
    ],
  };

  const LineData = {
    labels: ["0", "25", "50", "75", "100"], // X-axis labels
    datasets: [
      {
        label: "percentage", // Label for the line
        data: [65, 59, 80, 81, 56, 55], // Y-axis values
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color under the line
        borderWidth: 2, // Line width
        tension: 0.1, // Line smoothing
      },
    ],
  };
  return (
    <div className=" px-12 py-8 pr-6 ">
      <p className="text-[#5A5A5A] text-[22px] font-[550]">Skill Test</p>

      <div className="w-[100%] flex flex-col mt-8 gap-12 xl:flex-row">
        <div className="flex flex-col gap-7 pf-[2px] xl:w-[60%]">
          {/* Skill */}
          <div className="h-36 border-2 rounded-lg flex items-center justify-between px-2 pr-5">
            <div className="flex gap-5">
              <img src="/htmlIcon.png" alt="html icon" className="h-20" />
              <div className=" flex flex-col justify-center gap-1">
                <span className="text-[20px] font-bold">
                  Hyper Text Markup Language
                </span>
                <span className="text-[20px] text-[#707071]">
                  Question: 08 | Duration: 15 mins | Submitted on 5 June 2021
                </span>
              </div>
            </div>
            <button className="w-36 h-14 rounded-lg bg-[#132278] border-2 border-[#464646] text-white font-bold outline-none">
              Update
            </button>
          </div>

          {/* Statistics */}
          <div className="h-40 border-2 rounded-lg p-3 px-5 ">
            <span className="text-xl font-bold">Quick Statistics</span>
            <div className="flex justify-between">
              <div className="flex gap-2 border-r-2 h-24 items-center w-[30%]">
                <div className="w-14 h-14  rounded-full bg-[#f6f6f6] flex justify-center items-center 2xl:w-16 2xl:h-16">
                  <span className="text-2xl">🏆</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">4</span>
                  <span className="uppercase text-gray-500 text-[0.6rem] 2xl:text-[1rem]">
                    Your Rank
                  </span>
                </div>
              </div>
              <div className="flex gap-2 border-r-2 h-24 items-center  w-[30%]">
                <div className="w-14 h-14  rounded-full bg-[#f6f6f6] flex justify-center items-center 2xl:w-16 2xl:h-16">
                  <span className="text-2xl">📋</span>
                </div>
                <div className="flex flex-col ">
                  <span className="font-bold text-2xl">90%</span>
                  <span className="uppercase text-gray-500 text-[0.6rem] 2xl:text-[1rem]">
                    Percentile
                  </span>
                </div>
              </div>
              <div className="flex gap-2 h-24 items-center w-[30%]">
                <div className="w-14 h-14 rounded-full bg-[#f6f6f6] flex justify-center items-center 2xl:w-16 2xl:h-16">
                  <span className="text-2xl">✅</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl">12/15</span>
                  <span className="uppercase text-gray-500  text-[0.6rem] 2xl:text-[1rem]">
                    Correct answers
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* line graph */}
          <div className="h-[550px] border-2 rounded-lg p-4">
            <span className="text-xl font-bold">Comparison Graph</span>
            <div className="flex mt-5 justify-between">
              <p className="w-[90%] text-xl text-gray-600">
                <span className="font-bold text-gray-600">
                  You scored 90% percentile{" "}
                </span>
                Which is lower than the average percentile 72% of all the
                engineers who took this assessment
              </p>

              <div className="w-14 h-14  rounded-full bg-[#f6f6f6] flex justify-center items-center 2xl:w-16 2xl:h-16">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            <div className="w-[100%] h-[400px]">
              <Line data={LineData} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 xl:w-[45%]">
          {/* Syllabus wise analysis */}
          <div className="h-[600px] border-2 rounded-lg p-8">
            <span className="text-xl font-bold">Syllabus Wise Analysis</span>
            <div className="mt-12 flex flex-col gap-10 ">
              <div>
                <span className="text-xl text-gray-500">
                  HTML Tools, Forms, History
                </span>

                <div className="mt-5 flex justify-between items-center">
                  <div className="w-[85%] h-3 bg-[#ECF1FE] rounded-full">
                    <div className="w-[80%] rounded-full bg-[#357DF8] h-[100%]"></div>
                  </div>

                  <span className="text-xl font-bold text-[#357DF8]">80%</span>
                </div>
              </div>

              <div>
                <span className="text-xl text-gray-500">
                  Tags & References in HTML
                </span>

                <div className="mt-5 flex justify-between items-center">
                  <div className="w-[85%] h-3 bg-[#fef1ed] rounded-full">
                    <div className="w-[60%] rounded-full bg-[#FC843D] h-[100%]"></div>
                  </div>

                  <span className="text-xl font-bold text-[#FC843D]">60%</span>
                </div>
              </div>

              <div>
                <span className="text-xl text-gray-500">
                  Tables & References in HTML
                </span>

                <div className="mt-5 flex justify-between items-center">
                  <div className="w-[85%] h-3 bg-[#ffeceb] rounded-full">
                    <div className="w-[24%] rounded-full bg-[#f95451] h-[100%]"></div>
                  </div>

                  <span className="text-xl font-bold text-[#f95451]">24%</span>
                </div>
              </div>

              <div>
                <span className="text-xl text-gray-500">
                  Tables & CSS Basics
                </span>

                <div className="mt-5 flex justify-between items-center">
                  <div className="w-[85%] h-3 bg-[#eff8f1] rounded-full">
                    <div className="w-[96%] rounded-full bg-[#28be63] h-[100%]"></div>
                  </div>

                  <span className="text-xl font-bold text-[#28be63]">96%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pie chart */}
          <div className="h-[400px] border-2 rounded-lg p-4">
            {" "}
            <div className="flex justify-between">
              <span className="text-xl font-bold">Quick Statistics</span>
              <span className="text-xl font-bold text-blue-600">12/15</span>
            </div>
            <p className="text-xl text-gray-500 mt-5">
              <span className="font-bold text-gray-600">
                You scored 12 questions correct out of 15.
              </span>{" "}
              However it still needs some improvements
            </p>
            <div className="flex justify-center w-[100%] h-[60%] mt-10">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
