import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function SearchComponent({displayClasses}) {
  return (
    <div className={`${displayClasses}`}>
      <form action="" className="flex  justify-between gap-2">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search in anime"
          className="basis-[85%] ps-2 outline-none font-semibold"
        />
        <button className="rounded border cursor-pointer p-2   basis-[10%] bg-[red] rounded-[10px]">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </button>
      </form>
    </div>
  );
}

export default SearchComponent