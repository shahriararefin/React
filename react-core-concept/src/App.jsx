import './App.css'
import Count from './Count'
import Team from './Team'

function App() {
  
  //regular function
  function handleClick(){
    alert('button clicked')
  }

  //arrow function
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addFive = (num) => {
    alert(num+5)
  }

  return (
    <>
      <h1>React Core Concepts</h1>
      <Count></Count>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>

      <button onClick={() =>{alert('third clicked')}}>Button 3</button>

      <button onClick={() =>addFive(5)}>Sum button</button>
    </>
  )
}

export default App
