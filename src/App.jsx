import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { increament ,decreament} from './features/fun/counterSlice';

function App() {
 
  const count = useSelector(state => state.counter);
  const increby10 = useSelector(state => state.increby10);
 
  const dispatch = useDispatch();
  
  return (
    <>
     <h1>this counter create help with React-redux</h1>
     <h1>{count}</h1>
     <button
      aria-label="Increment value" 
     onClick={()=>dispatch(increament())}
     >increament</button>

     <button
      aria-label="Increment value" 
     onClick={()=>dispatch(decreament())}
     >increament</button>
    <h1>{increby10}</h1>
    </>
  )
}

export default App
