import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import { increament ,decreament,userbio} from './features/fun/counterSlice';
import { useRef } from 'react';

function App() {
  
  const userinput = useRef()
  const count = useSelector(state => state.counter);
  const increby10 = useSelector(state => state.increby10);
  const showbio = useSelector(state => state.showdata)
  
  const dispatch = useDispatch();
  
  function handlesubmit(e){
    e.preventDefault();

    dispatch(userbio(userinput.current.value));
  }
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

     <form onSubmit={handlesubmit}>
     <h1>Enter your name</h1>
      <input type="text" ref={userinput} />
      <button type='submit'>Get</button>
     </form>

     <h2>{showbio}</h2>
    </>
  )
}

export default App
