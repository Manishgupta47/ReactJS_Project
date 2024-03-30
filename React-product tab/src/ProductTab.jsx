import Product from "./Product";
function ProductTab() {
    let Styles = {
      display : "flex",
      flexWrap: "wrap",
      jutifyContent: "center",
      alignItem: "center"
    }
    return (
       <div style={Styles}>
        <Product title= "LogiTech MX Master" idx ={0} />
        <Product title="Apple Pencil (2nd gen)" idx= {1} />
        <Product title="Zebronics tranforms" idx= {2} />
        <Product title="Petronics Toad 23" idx = {3} />
       </div>
     )
   }
   export default ProductTab;