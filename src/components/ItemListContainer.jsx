import React from 'react'
import ItemCount from './ItemCount'

const handleCount=(cant)=>{
    alert(`Has agregado : ${cant} productos al carrito`)
}

function ItemListContainer () {
    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={handleCount}/>
        </div>
    )
}

export default ItemListContainer