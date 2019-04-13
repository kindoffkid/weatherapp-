import React, { useReducer, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css'
import App from './components/App'

// function reducer(state, action) {
//   if (action.type === 'add') {
//     return [
//         ...state,
//         {
//           id: Date.now(),
//           text: '',
//           completed: false
//         }
//       ]
//     }
//   if (action.type === 'delete') {
//     let newState = state.filter((e, i) => i !== action.payload)
//     return newState
//   }
//   if (action.type === 'text') {
//     let newState = state.map((elem, index) => { 
//       if (index === action.index) {
//         elem.text = action.payload
//         return elem
//       }
//       return elem
//     })
//     return newState
//   }
//   if (action.type === 'check') {
//     let newState = state.map((elem, index) => {
//       if (index === action.index) {
//         elem.completed = action.payload.checked
//         return elem
//       }
//       return elem
//     })
//     return newState
//   }
//   return state
// }

/////       TRAINING IN TODO APPPS
// const Ctx = React.createContext(null)
// function AApp() {
//   const [todos, dispatch] = useReducer(reducer, [])  
//   return (
//     <Ctx.Provider value={dispatch}>
//       <h1>Todo apps</h1>
//       <AddTodo dispatch={dispatch} todos={todos}/>
//       </Ctx.Provider>
//   )
// }

// function AddTodo({ dispatch, todos}) {
//   return (
//     < >
//       <button onClick={() => dispatch({ type: 'add' })}>Add Todo</button>
//       <Todos items={todos}/>
//       </>
//   )
// }
// function Todos({ items }) {
//   const dispatch = useContext(Ctx)
//   console.log(items)
//   if (!items) {
//     return null
//   }
//   let Component =  items.map((element, index) => {
//       return (
//         <div key={index}>
//           <input type='checkbox' onChange={event => dispatch({
//             type: 'check', index: index, payload: event.target
//           })}/>
//           <input type="text" value={element.text}
//             onChange={event => dispatch({
//               type: 'text', payload: event.target.value, index: index
//             })} />
//           <button onClick={() => dispatch({ type: 'delete', payload: index })}>Delete</button>
//         </div>)
//     })

//   return (
//     Component ? Component: null
//   )
// }

ReactDOM.render(<App />, document.getElementById('root'));


// serviceWorker.unregister();
