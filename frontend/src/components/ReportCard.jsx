import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

const ReportCard = ({ report }) => {
    const year = report && report.published.split(" ")[2];
    const month = report && report.published.split(" ")[0].slice(0, 3);
    const day = report && report.published.split(" ")[1];

    return (
        <div className="report-card bg-dark d-flex flex-row h-100 text-white">
            <div className="date-time-container p-2 py-3 d-flex flex-row justify-content-between align-items-center border bg-dark-01 fs-small">
                <span>{year}</span>
                <span className="bg-white separator my-2"></span>
                <span>{month + " " + day} </span>
            </div>
            <div className="card-content p-3">
                <p className="m-0 fw-bold">{report.insight && report.insight}</p> 
                <span className="opacity-90 fs-small">{report.sector && report.sector + ","} {report.pestle && report.pestle + ","} {report.topic && report.topic }</span>
                <p className="m-0 mb-3 fs-small">
                    <IoLocationOutline className="me-1 mb-1" />
                    {report.country && report.country}
                </p>
                
                <span className="badge badge-sm border border-white me-1">Intensity : {report.intensity}</span> 
                <span className="badge badge-sm border border-white me-1">Likelihood : {report.likelihood}</span> 
                <span className="badge badge-sm border border-white me-1">Relevance : {report.relevance}</span> 
                <p className="m-0 mt-1 fs-small">{report.title && report.title}</p> 
                <p style={{ fontWeight: 'bold' }} className="text-end text-muted w-100 m-0 mt-3 fs-small">-- {report.source}</p> 
            </div>
        </div>
    );
}

export default ReportCard;
