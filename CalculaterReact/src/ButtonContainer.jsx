import "./ButtonContainer.css";
export default function ButtonContainer({onSubmitClick}) {
    const buttonName = ["c", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."]
    return(
        <div classNamenamenameName='buttonsContainer'>
            {buttonName.map((buttonName)=>  <button classNamenamenameName='button' onClick={()=>onSubmitClick(buttonName)}>{buttonName}</button> )}
        
        
       </div>
    )
}