import { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_expand=type`)
                .then(response => response.json())
                .then((productsArray) => {
                    setProducts(productsArray)

                })
        },[]
    )
    return <>
    <h2>Products</h2>
    <article >
        {
            products.map(
                (product) => {
                    return <section key={product.id}>
                        <header>{product.name}--{product.price}--{product.type.category}</header>
                    </section>
                }
            )
        }
    </article>
    </>
}
