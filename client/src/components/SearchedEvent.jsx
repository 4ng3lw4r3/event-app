import React from 'react'

  //galima bus snackbariuka vietoje
  //search result i Searched event widgeta,
  // gal sitas turi but kuriame as mapinu? o 
  //ta widgeta i kita widgeta kur visi renginiai rasti.

export const SearchedEvent = ({ result }) => {
  console.log(result)

  return (
    <div
    className="search-result"
    onClick={(e) => alert(`You selected ${result}!`)}
  >
    {result}
  </div>
  )
}
