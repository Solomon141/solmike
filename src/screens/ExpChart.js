import React from "react";
import { Bar } from "react-chartjs-2";
import Badge from 'react-bootstrap/Badge';
// import { Chart as ChartJS } from "chart.js/auto";

function ExpChart({ chartData }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    Tools i used Daily
                </div>
                <div>
                    <Badge bg="secondary">Trello</Badge>
                    <Badge bg="primary">Github</Badge>
                    <Badge bg="secondary">Google Drive</Badge>
                    <Badge bg="primary">Heroku</Badge>
                </div>
                <div>
                    <Badge bg="secondary">Figma</Badge>
                    <Badge bg="primary">Docker</Badge>
                    <Badge bg="primary">Typescript</Badge>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Bar data={chartData} />
                </div>
            </div>
        </>
    );
}

export default ExpChart