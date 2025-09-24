import { useReducer, useState } from "react";

var initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'like':
            return { count: state.count + 1 }
        case 'dislike':
            return { count: state.count - 1 }
    }
}
export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="container-fluid">
            <h2>Likes Counter - {state.count}</h2>
            <button onClick={() => { dispatch({ type: 'like' }) }} className="bi bi-hand-thumbs-up btn btn-primary m-1">Like</button>

            <button onClick={() => { dispatch({ type: 'dislike' }) }} className="bi bi-hand-thumbs-down btn btn-success">DisLike</button>
        </div>
    )
}

