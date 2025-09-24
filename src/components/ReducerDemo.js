import { useEffect, useReducer, useState } from "react";

var initialState = { likes: 0, dislikes: 0 };
function reducer(state, action) {
    switch (action.type) {
        case "like":
            return { likes: parseInt(state.likes + 1), dislikes: state.dislikes };
        case "dislike":
            return { dislikes: parseInt(state.dislikes + 1), likes: state.likes };
    }
}

export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [product, setProduct] = useState();
    useEffect(() => {
        fetch("http://fakestoreapi.com/products/2")
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    return (
        <div className="container-fluid py-5 d-flex justify-content-center">
            <div
                className="card product-card shadow-lg border-0 rounded-4 text-center animate__animated animate__fadeInUp"
                style={{
                    width: "22rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
            >
                <img
                    src={product?.image}
                    className="card-img-top p-4 zoom-on-hover"
                    alt={product?.title}
                    style={{ objectFit: "contain", height: "260px" }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-semibold mb-3">{product?.title}</h5>
                    <p className="text-muted" style={{ minHeight: "60px" }}>
                        {product?.description?.slice(0, 100)}...
                    </p>
                    <h4 className="text-success fw-bold mb-3">${product?.price}</h4>
                </div>

                <div className="d-flex justify-content-around mt-4 pb-4">
                    <button
                        className="btn btn-outline-primary d-flex align-items-center gap-2 like-btn"
                        onClick={() => {
                            dispatch({ type: "like" });
                        }}
                    >
                        Like <span className="badge bg-primary bi bi-hand-thumbs-up">{state.likes}</span>
                    </button>

                    <button
                        className="btn btn-outline-danger d-flex align-items-center gap-2 dislike-btn"
                        onClick={() => {
                            dispatch({ type: "dislike" });
                        }}
                    >
                        Dislike <span className="badge bg-danger bi bi-hand-thumbs-down">{state.dislikes}</span>
                    </button>
                </div>
            </div>

        </div>
    );
}
