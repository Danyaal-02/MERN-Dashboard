import React, { useState } from 'react'
import { useEffect } from 'react'
import Loader from '../components/Loader'
import Scales from '../components/Scales'
import Tabs from '../components/Tabs'
import getChartData from '../hooks/getChartData'
import getTabData from '../hooks/getTabData'

const Home = () => {
    const [tabData, setTabData] = useState([])
    const [chartData, setChartData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        Promise.all([
            getTabData(),
            getChartData()
        ])
        .then(res => {
            setTabData(res[0].data)
            setChartData(res[1].data)
            setLoading(false)
        })
        .catch(err => console.error(err))
    }, [])

    return (
        <>
            {loading ? 
                <Loader />
                :
                <>
                    {chartData && chartData.relevances ?
                        <div className="home container navbar-padding position-relative px-2 px-sm-0 ">
                            <Tabs tabData={tabData} />    
                            <Scales chartData={chartData} />
                        </div>
                        :
                        <div className="container navbar-padding position-relative px-2 px-sm-0 text-center bg-secondary rounded py-2 my-2">
                            <span className="w-100 fw-bold text-center my-2 text-light">No data</span>
                        </div>
                    }
                </>
            }
        </>
    )
}

export default Home
