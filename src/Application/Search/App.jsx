import React, { useState } from "react";
import { Iteam } from "./Item";
import "./Style.css"
const Search = () => {
    const [search, setSearch] = useState("");

    const filteredItems = Iteam.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="container">
                <h1>Search Item</h1>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <ul>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, id) => <li key={id}>{item}</li>)
                    ) : (
                        <li>No Data</li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Search;
