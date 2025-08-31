import { useEffect, useState } from "react"

export default function ShoppingComponent() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItem, setCartItems] = useState([]);;
    const [itemsCount, setItemsCount] = useState(0);

    function LoadCategories() {
        fetch('https://fakestoreapi.com/products/categories/')
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                setCategories(data);
            });
    }

    function LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            });
    }

    // component initiliser
    useEffect(() => {
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products/');
    }, [cartItem.length]);


    function handleLoadCategoryChange(e) {
        if (e.target.value == 'all') {
            LoadProducts('https://fakestoreapi.com/products/');
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);

        }

    }

    function handleAddtoCart(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                cartItem.push(data);
                GetCartItemsCount();
            })
    }

    function GetCartItemsCount() {
        setItemsCount(cartItem.length);
    }


    return (
        <div className="container-fluid">
            <header className="bg-danger text-white text-center p-2">
                <h1><span className="bi bi-cart"></span>Shopping Home</h1>
            </header>
            <section className="row mt-2">
                <nav className="col-2">
                    <div>
                        <label>Select a Category</label>
                        <div>
                            <select onChange={handleLoadCategoryChange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option key={category} value={category}>
                                            {category.toUpperCase()}
                                        </option>
                                    )
                                }

                            </select>
                        </div>
                    </div>

                </nav>
                <main className="col-6 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-2 p-2" style={{ width: '200px' }}>
                                <img src={product.image} className="card-img-top" height="150" />
                                <div className="card-header" style={{ height: '160px' }}>
                                    <p>{product.title}</p>
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span className="bi bi-star-fill text-success"></span>{product.rating.rate}<span>[{product.rating.count}]</span>

                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                        <span className="bi bi-cart4">Add to Cart</span>
                                    </button>

                                </div>
                            </div>

                        )
                    }
                </main>
                <aside className="col-4 border-start">
                    <button className="btn btn-warning w-100">
                        <span className="bi bi-cart3"></span>[{itemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItem.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            <img src={item.image} width="100" height="50" />
                                        </td>
                                        <td>
                                            <button className="btn btn-danger">
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </aside>
            </section>
        </div>
    )
}