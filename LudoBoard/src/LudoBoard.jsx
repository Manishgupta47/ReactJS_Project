import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({Blue: 0, Green: 0, Yellow: 0, Red: 0})
    let [arr, setArr] = useState(["no moves"])

    let updateBlue= () =>{
        // setMoves((preMoves)=>{
        //     return{...preMoves, Blue: preMoves.Blue+1}
            
        // });
        setArr((prevArr)=>{
            return [...prevArr, "Blue moves"]
        });
        console.log(arr);
 };
 let updateGreen= () =>{
    setMoves((preMoves)=>{
        return{...preMoves, Green: preMoves.Green+1}
    });
};
    return (

       

        
        <div>
            <p>Game Begining!</p>
            <p>{arr}</p>
            <div className="Board">
                <p>Blue Moves = {moves.Blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Green Moves = {moves.Green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Yellow Moves = {moves.Yellow}</p>
                <button style={{backgroundColor: "yellow"}}>+1</button>
                <p>Red Moves = {moves.Red}</p>
                <button style={{backgroundColor: "red"}}>+1</button>
            </div>
        </div>
    )
}