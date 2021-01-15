import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeInput, populateData } from '../actions'

class EntryForm extends Component {
  constructor(props) {
    super(props)
    this.state = { error: '' }
  }

  changeHandler = (e) => {
    let name = e.target.name
    let value = e.target.value === '' ? '' : parseInt(e.target.value, 10)
    this.props.onChange(name, value)
  }

  submitHandler = () => {
    let er = ''
    if (this.props.total_slots !== '')
      if (!isNaN(this.props.total_slots))
        if (!isNaN(this.props.filled))
          if (this.props.filled <= this.props.total_slots)
            this.props.populateLot()
          else er = 'Cars cannot be more than slots.'
        else er = 'Enter correct value for initial cars.'
      else er = 'Enter correct value for total slots'
    else er = 'Enter total number of parking slots'

    this.setState({ error: er })
  }
  render() {
    return (
      <div className='entry-block'>
        <div className='row'>
          <label>
            Total Parking Slots{' '}
            <input
              className='col-6'
              type='number'
              name='total_slots'
              onChange={this.changeHandler}
              value={this.props.total_slots}
            />
          </label>
          <label>
            Initial Cars{' '}
            <input
              type='number'
              className='col-6'
              name='filled'
              onChange={this.changeHandler}
              value={this.props.filled}
            />
          </label>
          <div>
            <button
              className='btn btn-primary btn-sm'
              onClick={this.submitHandler}
            >
              Generate
            </button>
          </div>
        </div>
        <div className='error'>{this.state.error}</div>
      </div>
    )
  }
}

const mapStateToProps = (lot) => {
  return { total_slots: lot.total_slots, filled: lot.filled }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name, value) => {
      dispatch(changeInput(name, value))
    },
    populateLot: () => {
      dispatch(populateData())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm)
