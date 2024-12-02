import React, { useState } from "react";
import Item from "./Item";
import Validator from "./Validator";

const List = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        if (newItem.length >= 3) {
            setItems([...items, newItem]);
            setNewItem("");
        }
    };

    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div>
            <Validator value={newItem} onChange={setNewItem} />
            <button onClick={addItem}>Dodaj dokument medyczny</button>
            <ul>
                {items.map((item, index) => (
                    <Item key={index} value={item} onRemove={() => removeItem(index)} />
                ))}
            </ul>
        </div>
    );
};

export default List;