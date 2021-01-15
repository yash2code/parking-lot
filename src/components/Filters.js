import React from 'react'

export default function Filters(props) {
  return (
    <div className='row filters'>
      <div className='col-4'>
        <input
          type='text'
          name='regfilter'
          onChange={props.onChange}
          value={props.filterVals.rfil}
        />
      </div>
      <div className='col-4'>
        <input
          type='text'
          name='colorfilter'
          onChange={props.onChange}
          value={props.filterVals.cfil}
        />
      </div>
      <div className='col-2'>
        <input
          type='number'
          name='slotfilter'
          onChange={props.onChange}
          value={props.filterVals.sfil}
        />
      </div>
      <div className='col-2'></div>
    </div>
  )
}
