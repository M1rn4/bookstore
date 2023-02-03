// Actions
const STATUS   = 'my-app/books/STATUS';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function statusBooks() {
  return { type: STATUS };
}
