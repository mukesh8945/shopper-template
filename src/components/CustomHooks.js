import { useFetchData } from "../hooks/useFetchData"

export default function CustomHooks() {
    const [data] = useFetchData("http://fakestoreapi.com/products");
    return (
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.map(product =>
                        <li>{product.title}</li>
                    )
                }
            </ol>
        </div>
    )
}


