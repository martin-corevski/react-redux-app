import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from '../../store/actions'

class ReduxReady extends Component {
  render () {
    return (
      <div>
        <h1>
          {this.props.title}
        </h1>
        <button
          onClick={this.props.onAction}
          style={{cursor: 'pointer'}}>Test action</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.title
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAction: () => dispatch({
      type: actionTypes.ACTION,
      val: 'Default action works too!'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxReady)
