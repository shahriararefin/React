import { useState } from "react"

function Count(){

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count+1;
        setCount(newCount)
    }

    const handleMinus = () => {
        if(count!= 0){
        const newCount = count -1;
        setCount(newCount)
        }
    }
    return(
        <div>
            <h4>Counter: {count}</h4>
            <button onClick={handleAdd}>Add Count</button>
            <button onClick={handleMinus}>Decrease Count</button>
        </div>
    )
}


export default Count