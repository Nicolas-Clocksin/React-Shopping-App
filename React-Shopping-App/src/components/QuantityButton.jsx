
import { useState } from "react";
function QuantityButton(value){
    const [quantity, setQuantity] = useState(value);
    const decreaseQuantity = ()=>{
    if(quantity>0){

        setQuantity(quantity-1);
    }
    };
    const increaseQuantity = ()=>{
    setQuantity(quantity+1);
    }
    return(
       <div className='itemPageQuantity'>
         <Button size="sm" onClick={()=>decreaseQuantity()}><i class="bi bi-arrow-left"></i></Button>
         <p>{quantity}</p>
         <Button size="sm"  onClick={()=>increaseQuantity()}><i class="bi bi-arrow-right"></i></Button>
      </div>
    );
}

export default QuantityButton