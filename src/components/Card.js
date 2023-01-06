

const Card= ({ele}) => {
  return (
    < div>
    <h2>Item:{ele.item}</h2>
    <h3>Brand:{ele.brand}</h3>
    <h3>Unit:{ele.units}</h3>
    <h3>Quantity{ele.quantity}</h3>
    {/* <h1>Purchased:<h1><input type={}</h1>  {ele.quantity}</h1> */}
  
  </div>
  )
}

export default Card