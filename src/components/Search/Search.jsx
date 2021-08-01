import React, { useState } from 'react'
import './Search.css'

export const Search = ({handlerSearch}) => {
  const [searchValue, setSearchValue] = useState('')

  const onSearch = change => setSearchValue(change.target.value)

  return (
    <div className="search">
      <input value={searchValue}
             onChange={onSearch}
             type="text"/>
      <button onClick={() => searchValue && handlerSearch(searchValue)}>
        <svg width="32" height="20" className="_35lll _3FpBp _24pSQ" viewBox="0 0 32 32" version="1.1"
             aria-hidden="false">
          <path
            d="M22 20c1.2-1.6 2-3.7 2-6 0-5.5-4.5-10-10-10S4 8.5 4 14s4.5 10 10 10c2.3 0 4.3-.7 6-2l6.1 6 1.9-2-6-6zm-8 1.3c-4 0-7.3-3.3-7.3-7.3S10 6.7 14 6.7s7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3z"></path>
        </svg>
      </button>
    </div>
  )
}