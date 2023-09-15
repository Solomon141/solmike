import React from "react";
import { Bar } from "react-chartjs-2";

function ExpChart({ chartData }) {
    return (
        <div className="row">
            <div className="col-sm-12">
                <Bar data={chartData} />
            </div>
        </div>
    );
}

export default ExpChart