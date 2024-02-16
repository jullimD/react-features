import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp';






// const App = (props) => {
//   const [count=0, setCount] = useState(props.count)
//   const [text, setText] = useState('')

//   useEffect(() => {
//     console.log('This shud run once')
//   }, [])

//   useEffect(() => {
//     console.log('useEffect ran')
//     document.title = count
//   }, [count])

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(props.count? props.count:0)}>Reset</button>
//       <input value={text} onChange={(e) => setText(e.target.value)}/>
//       </div>
//   )
// }


// App.defaultProps = {
//   count: 5
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NoteApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
