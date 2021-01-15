import React from 'react'

export default function DataRow(props) {
  return (
    <div className='row table-row'>
      <div className='col-4'>{props.data.registration}</div>
      <div className='col-4'>{props.data.color}</div>
      <div className='col-2'>{props.data.slot}</div>
      <div className='col-2'>
        <button
          className='btn btn-sm btn-danger'
          onClick={() => props.onClick(props.data.slot)}
        >
          Exit
        </button>
      </div>
    </div>
  )
}
