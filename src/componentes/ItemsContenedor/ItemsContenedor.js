import './ItemsContenedor.css'
import { useState, useEffect } from 'react'
import { Productos } from '../../asyncMock'

import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        Productos().then(products => {
            setProducts(products)
        })
    }, [])

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>

    )
}

export default ItemListContainer