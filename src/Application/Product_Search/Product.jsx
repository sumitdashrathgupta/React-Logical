import React, { useContext, useEffect, useState } from "react";
import "./Style.css";
import { CreateContext } from "./Context/Context";

const Product = () => {
    const { Data, setData } = useContext(CreateContext);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function ProductData() {
            const FetchData = await fetch("https://fakestoreapi.com/products");
            const FinalData = await FetchData.json();
            setData(FinalData);
        }
        ProductData();
    }, []);

    // Filter products based on search input
    const filteredProducts = Data.filter((v) =>
        v.category.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredProducts)

    return (
        <>
            <header>
                <nav className="navbar">
                    <input
                        type="text"
                        placeholder="Search category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </nav>
            </header>
            <div className="contenar">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((v, i) => {
                        const { category, image, description, price, title } = v;
                        return (
                            <div className="card" key={i + 1}>
                                <div className="image">
                                    <img src={image} alt={title} />
                                </div>
                                <div className="ditalis">
                                    <h2>{title}</h2>
                                    <h3>₹ {price}</h3>
                                    <p>{description}</p>
                                    <p><strong>Category:</strong> {category}</p>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p>No products found for "{search}"</p>
                )}
            </div>
        </>
    );
};

export default Product;
