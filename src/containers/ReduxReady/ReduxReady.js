import React, { Component } from 'react'
import { connect } from 'react-redux'
// import axios from '../../axios'

// For single reducer
// import * as actionTypes from '../../store/actions/actionTypes'
// For multiple reducers
import * as actionCreators from '../../store/actions/index'

class ReduxReady extends Component {
  render () {
    return (
      <div>
        <h1>Test redux by pressing the buttons</h1>
        <h3>
          {/* For single reducer */}
          {/* {this.props.title} */}
          {/* For multiple reducers */}
          {this.props.str}
        </h3>
        {/* For single reducer */}
        {/* <button
          onClick={this.props.onAction}
        style={{cursor: 'pointer'}}>Test action</button> */}
        {/* For multiple reducers */}
        <button
          onClick={this.props.onAction1}
          style={{cursor: 'pointer'}}>Test action</button>
        <button
          onClick={this.props.onAction2}
          style={{cursor: 'pointer'}}>Show me some numbers</button>
        <hr />
        {this.props.nums.join(' ')}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    // For single reducer setup
    // title: state.title
    // For multiple reducers
    str: state.r1.string,
    nums: state.r2d2.numbers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // For single reducer
    // onAction: () => dispatch({
    //   type: actionTypes.ACTION,
    //   val: 'Default action works too!'})
    // For multiple reducers
    onAction1: () => dispatch(actionCreators.action1()),
    onAction2: () => dispatch(actionCreators.action2(1))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxReady)
