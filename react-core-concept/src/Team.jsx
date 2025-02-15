import { useState } from "react"

function Team(){

    const [team, setTeam] = useState(11);

    const handleAdd = () => {
        const newTeam = team +1;
        setTeam(newTeam)
    }

    const handleRemove = () => {
        if(team!=0){
        const newTeam = team -1;
        setTeam(newTeam)
        }
    }
    return(
        <div>
            <h3>Total Players: {team} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>

        </div>
    )
}
export default Team