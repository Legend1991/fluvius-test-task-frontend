import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as eventsActions from '../../redux/reducers/events'

class Calendar extends Component {
  componentWillMount () {
    this.props.getEvents()
  }

  render () {
    return (
      <div id='content' />
    )
  }
}

export default connect(
  state => ({
    events: state.events
  }),
  dispatch => ({
    ...bindActionCreators(eventsActions, dispatch)
  })
)(Calendar)
