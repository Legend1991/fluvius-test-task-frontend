import api from '../../services/api'

const GET_EVENTS_START = 'GET_EVENTS_START'
const GET_EVENTS_DONE = 'GET_EVENTS_DONE'
const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL'

const initState = {events: []}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_EVENTS_START:
      return {
        ...state,
        inProgress: true
      }

    case GET_EVENTS_DONE:
      return {
        ...state,
        inProgress: false,
        events: action.payload.result
      }

    case GET_EVENTS_FAIL:
      return {
        ...state,
        inProgress: false,
        errors: action.payload.errors
      }

    default:
      return state
  }
}

export const getEvents = ({offset, limit, from, to}) => ({
  types: [GET_EVENTS_START, GET_EVENTS_DONE, GET_EVENTS_FAIL],
  payload: api.getEvents({offset, limit, from, to})
})
