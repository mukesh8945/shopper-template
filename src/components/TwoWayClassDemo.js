import React from "react";
export default class TwoWayClassDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Product Details',
            Name: 'Samsung TV',
            Price: 5678.89,
            Stock: true,
            Cities: ['Delhi', 'Pune'],
            Rating: { rate: 4.4, count: 6700 }
        }
    }
    render() {
        return (
            <div className="container-fluid">
                <h2>Product Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{(this.state.Stock == true) ? "Available" : "Out of Stock"}</dd>
                    <dt>
                        <dd>
                            <ol>
                                {
                                    this.state.Cities.map(city =>
                                        <li key={city}>{city}</li>
                                    )
                                }
                            </ol>
                        </dd>
                        <dt>Rating</dt>
                        <dd>
                            <span className="bi bi-star-fill text-success"></span>{this.state.Rating.rate}[{this.state.Rating.count}]
                        </dd>
                    </dt>
                </dl>
            </div>
        )
    }
}