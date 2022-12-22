import {useEffect, useState} from 'react'
import pedirDatos from '../helpers/pedirDatos.js'
import ItemList from "../ItemList/ItemList.js";



const ItemListContainer = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log("Ups parece haber un error");
            })
    }, [])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}

export default ItemListContainer