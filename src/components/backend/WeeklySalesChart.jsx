"use client";
import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

export default function WeeklySalesChart() {
  ChartJS.register(
    CategoryScale,
    LineElement,
    LinearScale,
    Title,
    Legend,
    PointElement,
    Tooltip
  );
  const options = {
    responsive: true,
    plugin: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  //   const data = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "Dataset 1",
  //         data: labels.map(() =>
  //           faker.datatype.boolean({ min: -1000n, max: 1000n })
  //         ),
  //         borderColor: "rgb(255,99,132)",
  //         backgroundColor: "rgba(255,99,132,0.5)",
  //       },
  //       {
  //         label: "Dataset 2",
  //         data: labels.map(() =>
  //           faker.datatype.boolean({ min: -1000n, max: 1000n })
  //         ),
  //         borderColor: "rgb(53,162,235)",
  //         backgroundColor: "rgba(53,162,235, 0.5)",
  //       },
  //     ],
  //   };
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() =>
              faker.datatype.boolean({ min: -1000n, max: 1000n })
            ),
            borderColor: "rgb(0,137,132)",
            backgroundColor: "rgba(0,137,132,0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() =>
              faker.datatype.boolean({ min: -1000n, max: 1000n })
            ),
            borderColor: "rgb(255,99,132)",
            backgroundColor: "rgba(255,99,132,0.5)",
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);
  return (
    <div className="dark:bg-slate-700 bg-slate-100 shadow-xl p-8 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">
        Weekly Sales
      </h2>

      <div className="p-4">
        <div className="text-sm font-medium text-center text-gray-200 border-b border-gray-400 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => {
              return (
                <li className="me-2" key={i}>
                  <button
                    onClick={() => setChartToDisplay(tab.type)}
                    className={
                      chartToDisplay == tab.type
                        ? "inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500"
                        : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-300 hover:border-gray-100 dark:hover:text-gray-100"
                    }
                  >
                    {tab.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        {tabs.map((tab, i) => {
          if (chartToDisplay === tab.type) {
            return <Line options={options} data={tab.data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
}
