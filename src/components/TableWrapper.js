import React from 'react'

export default function TableWrapper(props) {
  return (
    <div className='data-table'>
      <div className='row table-header'>
        <div className='col-4 h4'>Registration Number</div>
        <div className='col-4 h4'>Colour</div>
        <div className='col-2 h4'>Slot</div>
        <div className='col-2 h4'></div>
      </div>
      <hr />
      {props.children}
      <div className='row table-footer'></div>
    </div>
  )
}
