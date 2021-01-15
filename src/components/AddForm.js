import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNew } from '../actions'

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = { registration: '', colour: '', er: '' }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value.toUpperCase() })
  }

  submitHandler = () => {
    let er = ''
    if (this.state.registration.match(/^[A-Z]{2}-\d{2}-[A-Z]{2}-[1-9]\d{3}$/))
      if (this.state.colour.match(/[A-Za-z]+/)) {
        this.props.onSubmit(this.state.registration, this.state.colour)
        this.setState({ registration: '', colour: '' })
      } else er = 'Enter correct colour value'
    else er = 'Enter registration number in correct format - AB-12-XY-1234'

    this.setState({ error: er })
  }
  render() {
    if (this.props.available > 0)
      return (
        <div className='add-block'>
          <div>Available space: {this.props.available}</div>
          <div className='error'>{this.state.error}</div>
          <div className='error'>
            {this.state.error === '' && this.props.duplicate_err
              ? 'This Registration number already exist. Please enter correct number.'
              : ''}
          </div>
          <div className='row'>
            <label>
              Registration No
              <input
                type='text'
                name='registration'
                placeholder='AB-12-XY-1234'
                value={this.state.registration}
                onChange={this.changeHandler}
              />
            </label>
            <label>
              Colour
              <input
                type='text'
                name='colour'
                value={this.state.colour}
                onChange={this.changeHandler}
              />
            </label>
            <div>
              <button onClick={this.submitHandler}>Add</button>
            </div>
          </div>
        </div>
      )
    else return null
  }
}

const mapStateToProps = (lot) => {
  return {
    duplicate_err: lot.dup_err,
    available: lot.available_slots.length,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (reg, colour) => {
      dispatch(addNew(reg, colour))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm)
