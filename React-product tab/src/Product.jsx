import "./Product.css"
import Price from "./Price";
function Product({title, idx}) {
  let newPrice =["12,000", "13,400", "15,400", "17,300"];
  let oldPrice =["11,000", "19,000", "12,000", "17,000"];
  let Description = [["Wireless", "wapcos"], ["Coummnication", "Ford"], ["Tata Steel", "Tyota"], ["Hyundai EON", "Suzuki"]];
    
    return (
       <div className="Product" >
       <h3>{title}</h3>
       <p>{Description[idx][0]}</p>
       <p>{Description[idx][1]}</p>
       <Price  oldPrice = {oldPrice[idx]} newPrice= {newPrice[idx]}/>

       </div>
     ); 
   }

   export default Product;