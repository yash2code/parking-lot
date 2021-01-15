import React, { Component } from 'react'
import { connect } from 'react-redux'
import { clearSlot, updateFilter } from '../actions'
import DataRow from './DataRow'
import TableWrapper from './TableWrapper'
import Filters from './Filters'

class DataTable extends Component {
  filterHandler = (e) => {
    if (e.target.name === 'slotfilter') {
      let n = e.target.value === '' ? '' : parseInt(e.target.value, 10)
      this.props.getFilter('slotfilter', n)
    } else this.props.getFilter(e.target.name, e.target.value.toUpperCase())
  }
  render() {
    if (this.props.data.length > 0) {
      let data = this.props.data

      data =
        this.props.filters.rfil === ''
          ? data
          : data.filter((val) => {
              return val.registration.includes(this.props.filters.rfil)
            })

      data =
        this.props.filters.cfil === ''
          ? data
          : data.filter((val) => {
              return val.color.includes(this.props.filters.cfil)
            })

      data =
        this.props.filters.sfil === ''
          ? data
          : data.filter((val) => {
              return this.props.filters.sfil === val.slot
            })

      const rows = data.map((item) => {
        return (
          <DataRow
            key={item.slot}
            data={item}
            onClick={this.props.removeBtnHandler}
          />
        )
      })

      return (
        <div className='col-12'>
          <TableWrapper>
            <Filters
              filterVals={this.props.filters}
              onChange={this.filterHandler}
            />
            {rows}
          </TableWrapper>
        </div>
      )
    } else
      return (
        <div className='m-5 p-5 pull-center'>
          <div className='h3 justify-content-center'>No Parking</div>
        </div>
      )
  }
}

const mapStateToProps = (lot) => {
  return {
    data: lot.vehicles,
    available: lot.available_slots.length,
    filters: {
      rfil: lot.regfilter,
      cfil: lot.colorfilter,
      sfil: lot.slotfilter,
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBtnHandler: (slotID) => {
      dispatch(clearSlot(slotID))
    },
    getFilter: (name, value) => {
      dispatch(updateFilter(name, value))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
