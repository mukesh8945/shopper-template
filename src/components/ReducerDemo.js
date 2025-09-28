import { useEffect, useReducer, useState, useRef } from "react";

const initialState = [];

function reducer(state, action) {
    switch (action.type) {
        case "setProducts":
            return action.payload.map(() => ({ likes: 0, dislikes: 0 }));

        case "like":
            return state.map((s, i) =>
                i === action.index
                    ? {
                        likes: s.likes + 1,
                        dislikes: s.dislikes > 0 ? s.dislikes - 1 : s.dislikes,
                    }
                    : s
            );

        case "dislike":
            return state.map((s, i) =>
                i === action.index
                    ? {
                        likes: s.likes > 0 ? s.likes - 1 : s.likes,
                        dislikes: s.dislikes + 1,
                    }
                    : s
            );

        default:
            return state;
    }
}

export default function ReducerDemo() {
    const [products, setProducts] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);
    const carouselRef = useRef(null);

    // Fetch products on component mount
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=6")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                dispatch({ type: "setProducts", payload: data });
            });
    }, []);

    // Scroll carousel left
    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    // Scroll carousel right
    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="container py-5 position-relative">
            <h2 className="text-center fw-bold mb-5">🛍️ Featured Products</h2>

            {/* Scroll Left Button */}
            <button
                className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
                style={{ zIndex: 1 }}
                onClick={scrollLeft}
                aria-label="Scroll left"
            >
                ⬅️
            </button>

            {/* Scroll Right Button */}
            <button
                className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
                style={{ zIndex: 1 }}
                onClick={scrollRight}
                aria-label="Scroll right"
            >
                ➡️
            </button>

            {/* Carousel */}
            <div
                ref={carouselRef}
                className="d-flex overflow-auto gap-4 px-3 carousel-row"
                style={{
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className="card shadow-lg border-0 rounded-4 text-center flex-shrink-0 product-card"
                        style={{
                            width: "22rem",
                            scrollSnapAlign: "center",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                    >
                        <img
                            src={product.image}
                            className="card-img-top p-4"
                            alt={product.title}
                            style={{ objectFit: "contain", height: "260px" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-3">
                                {product.title.slice(0, 35)}...
                            </h5>
                            <p className="text-muted" style={{ minHeight: "60px" }}>
                                {product.description.slice(0, 100)}...
                            </p>
                            <h4 className="text-success fw-bold mb-3">${product.price}</h4>
                        </div>

                        <div className="d-flex justify-content-around mt-4 pb-4">
                            <button
                                className="btn btn-outline-primary d-flex align-items-center gap-2"
                                onClick={() => dispatch({ type: "like", index })}
                            >
                                👍 Like{" "}
                                <span className="badge bg-primary">
                                    {state[index]?.likes ?? 0}
                                </span>
                            </button>

                            <button
                                className="btn btn-outline-danger d-flex align-items-center gap-2"
                                onClick={() => dispatch({ type: "dislike", index })}
                            >
                                👎 Dislike{" "}
                                <span className="badge bg-danger">
                                    {state[index]?.dislikes ?? 0}
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
