import React from 'react'
import Autocomplete from './AutoComplete'
import countries from "../data/countries.json"
import pestles from "../data/pestles.json"
import sectors from "../data/sectors.json"
import topics from "../data/topics.json"

const FilterInputs = ({ filters, setFilters}) => {

    return (
        <div className="row g-2 justify-content-center">
            <div className="col-6 col-sm-6 col-lg-3">
                <Autocomplete title={"country"} options={countries} setFilters={setFilters} filters={filters} />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
                <Autocomplete title={"topic"} options={topics} setFilters={setFilters} filters={filters} />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
                <Autocomplete title={"sector"} options={sectors} setFilters={setFilters} filters={filters} />
            </div>
            <div className="col-6 col-sm-6 col-lg-3">
                <Autocomplete title={"pestles"} options={pestles} setFilters={setFilters} filters={filters} />
            </div>
        </div>
    )
}

export default FilterInputs
