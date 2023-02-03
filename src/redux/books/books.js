// Actions
const CREATE = 'my-app/booksCREATE';
const REMOVE = 'my-app/books/REMOVE';
const UPDATE = 'my-app/books/UPDATE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function createBook(book) {
  return { type: CREATE, book };
}
export function updateBook(book) {
  return { type: UPDATE, book };
}
export function removeWidget(book) {
  return { type: REMOVE, book };
}
