import React from 'react'
import { RiBarChartGroupedLine } from "react-icons/ri"

const Tabs = ({ tabData }) => {
    return (
        <div className="tabs mb-2">
            <div className="row g-2">
                <div className="col-6 col-sm-4">
                    <div className="tab p-2 bg-white d-flex flex-row align-items-center">
                        <RiBarChartGroupedLine className="fs-big me-2 bg-dark text-light p-1" />
                        <div className="tab-content">
                            <span className="text-secondary">Total</span>
                            <h3 className="m-0 p-0">{tabData.total}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-sm-4">
                    <div className="tab p-2 bg-white d-flex flex-row align-items-center">
                        <RiBarChartGroupedLine className="fs-big me-2 bg-dark text-light p-1" />
                        <div className="tab-content">
                            <span className="text-secondary">Energy</span>
                            <h3 className="m-0 p-0">{tabData.energy}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs
