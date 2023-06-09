import { useState } from "react";
import Button from "../Button/Button";

export default function ItemCount(props){
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < 3) {
            setCount(count + 1);
        }
    }

    function handleSubstract() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
                <Button type="button" className="btn btn-outline-dark" onClick={handleSubstract}>➖</Button>
                <span className="text-black"> {count} </span>
                <Button type="button" className="btn btn-outline-dark" onClick={handleAdd}>➕</Button>
            </div>
            <div>
                <Button onClick={() => props.onAddToCart(count)} type="button" className="btn btn-primary">Agregar al Carrito</Button>
            </div>
        </div>
    )
}



