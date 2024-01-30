import React, { useState } from 'react';
import { IoClose } from "react-icons/io5"

const Autocomplete = ({title, options, setFilters, filters}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('')


  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleInputChange = e => {
    setInputValue(e.target.value);
    setSelectedOption(e.target.value)
  };

  const handleOptionClick = selectedOption => {
    setInputValue(selectedOption.label);
    setSelectedOption('')
    const newFilters = {...filters, ...selectedOption.value}
    setFilters(newFilters)
  };

  window.addEventListener("click", () => {
    setSelectedOption('')
  })

  const clearFilter = (e) => {
    e.preventDefault()
    delete filters[`${title}`]
    setFilters({...filters})
    setInputValue('')
}

  return (
    <div className="autoComplete position-relative">
        <div className="input-group">
          <input className="form-control border border-light" placeholder={title} type="text" id="autocomplete" name="autocomplete" value={inputValue} onChange={handleInputChange} autoComplete="off" />
          <button type="button" className="btn btn-sm btn-light text-secondary z-index-1" onClick={e => clearFilter(e)}>
            <IoClose />
          </button>
        </div>
        <div className="position-absolute top-100 left-0 bg-white border rounded z-index-10">
            {selectedOption && filteredOptions ? 
                filteredOptions.map((option, i) => 
                    <option key={i} value={option.value} onClick={e => handleOptionClick(option)} className="px-3 cursor-pointer border border-bottom hover-input">{option.label}</option>
                )
                :
                null  
            }
        </div>
    </div>
  );
};

export default Autocomplete;
