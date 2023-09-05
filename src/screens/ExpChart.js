import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ExpChart({ chartData }) {
    return (
        <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-8">
                <Bar data={chartData} />
            </div>
        </div>
    );
}

export default ExpChart