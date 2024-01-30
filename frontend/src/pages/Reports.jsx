import React, { useEffect, useState } from 'react'
import FilterInputs from '../components/FilterInputs'
import Loader from '../components/Loader'
import ReportCard from '../components/ReportCard'
import getReports from '../hooks/getReports'

const Reports = () => {
    const [loading, setLoading] = useState(false)
    const [reports, setReports] = useState([])
    const [filters, setFilters] = useState({})
    const [page, setPage] = useState(12)

    useEffect(() => {
        setLoading(true)
        getReports(filters)
            .then(res => {
                setReports(res.data)
                setLoading(false)
                setPage(12)
            })
            .catch(err => console.error(err))
    }, [filters])



    return (
        <div className="container px-2 px-sm-0 navbar-padding">
            <FilterInputs filters={filters} setFilters={setFilters} reports={reports} />
            <p className="text-white m-0 mt-3">Reports</p>
            {loading ? <Loader />
                :
                <>
                    {reports && reports.length ?
                        <div className="">
                            <div className="row g-3 mb-2">
                                {reports.slice(0,page).map((report, i) =>     
                                    <div key={i} className="col-md-6 col-lg-4 position-relative">
                                        <ReportCard report={report} />
                                    </div>
                                )}
                            </div>
                            {page < reports.length ? 
                                <div className="w-100 my-2 d-flex justify-content-center">
                                    <button type="button" className="btn btn-sm btn-warning m-auto" onClick={() => setPage(page+13)} >Read More</button>
                                </div>
                                : null
                            }
                        </div>
                        :
                        <div className="container position-relative px-2 px-sm-0 text-center bg-secondary rounded py-2 my-2">
                            <span className="w-100 fw-bold text-center my-2 text-light">No data</span>
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Reports
