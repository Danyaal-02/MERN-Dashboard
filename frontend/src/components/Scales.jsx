import React from 'react';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';

const Scales = ({ chartData }) => {
    return (
        <>
            <div className="row g-2 justify-content-center mb-2">
                <div className="col-md-6 col-lg-3 position-relative">
                    <div className="relevance h-100 p-2 bg-dark d-flex justify-content-center flex-column"> {/* Change background color to bg-dark */}
                        <span className="text-white mb-2">Relevance</span>
                        <div className="piechart d-flex justify-content-center">
                            <PieChart chartData={chartData && chartData.relevances} />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 position-relative order-md-last order-lg-0">
                    <div className="likelihood p-2 h-100 bg-dark d-flex justify-content-center flex-column"> {/* Change background color to bg-dark */}
                        <span className="text-white">Published Reports</span>
                        <div className="piechart d-flex justify-content-center">
                            <BarChart chartData={chartData && chartData.published} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 position-relative">
                    <div className="likelihood p-2 h-100 bg-dark d-flex justify-content-center flex-column"> {/* Change background color to bg-dark */}
                        <span className="text-white mb-2">Likelihood</span>
                        <div className="piechart d-flex justify-content-center">
                            <PieChart chartData={chartData && chartData.likelihoods} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 position-relative">
                    <div className="likelihood p-2 h-100 bg-dark d-flex flex-column"> {/* Change background color to bg-dark */}
                        <span className="text-white">Published Years</span>
                        <div className="piechart d-flex justify-content-center">
                            <BarChart chartData={chartData && chartData.years} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 position-relative">
                    <div className="intensities p-2 h-100 bg-dark d-flex justify-content-center flex-column"> {/* Change background color to bg-dark */}
                        <span className="text-white mb-2">Intensities</span>
                        <div className="piechart d-flex justify-content-center">
                            <BarChart chartData={chartData && chartData.intensities} />
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Scales;
