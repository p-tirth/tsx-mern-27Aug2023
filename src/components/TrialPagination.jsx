import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate'

export default function TrialPagination() {
    
    const handlePageChange = (data) => {
        console.log(data.selected+1)
    }
  return (
    <>            
        <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={10}
        marginPagesDisplayed={3}
        onPageChange={handlePageChange}
        />
    </>
  )
}
