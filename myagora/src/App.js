import './App.css';
import { useEffect, useState } from 'react';
import { Form } from './Form'
import { Discussions } from './Discussions'
import { Discussion } from './Discussion';

function App() {
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/discussions')
    .then(res => res.json())
    .then(data => {
      setDiscussions(data)
    })
  },[])



  return (
    <div>
      < Form />
      <Discussions discussions={discussions}></Discussions>
    </div>
  )
}          
머ㅏㅇ리;ㄴㅁ러 
export default App;
