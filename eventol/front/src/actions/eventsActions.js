export const SET_EVENTS = 'SET_EVENTS';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const DELETE_EVENT = 'DELETE_EVENT';
export const CREATE_EVENT = 'CREATE_EVENT';

export function setEvents(events){
  return {
    type: SET_EVENTS,
    events
  }
}

export function updateEvent(event){
  return {
    type: UPDATE_EVENT,
    event
  }
}

export function deleteEvent(event){
  return {
    type: DELETE_EVENT,
    event
  }
}

export function createEvent(event){
  return {
    type: CREATE_EVENT,
    event
  }
}

const eventsActions = {
  setEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  DELETE_EVENT,
  CREATE_EVENT,
  UPDATE_EVENT,
  SET_EVENTS
}
export default eventsActions
