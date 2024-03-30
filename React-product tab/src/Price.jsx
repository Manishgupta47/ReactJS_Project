export default function Price({newPrice, oldPrice}){
    return(

       <div style={{
        backgroundColor: "#e0C367",
        height:"50px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"
       }} >
         <span style={{textDecorationLine: "line-through"}}>{newPrice}</span>
         &nbsp; &nbsp;
        <span style ={{fontWeight:"bold"}}>{oldPrice}</span>
       </div>
    );
}
