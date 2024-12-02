import React from "react";
import "./Item.css";

const Item = ({ value, onRemove }) => (
    <li className="list-item">
        {value}
        <button onClick={onRemove}>Usuń dokument</button>
    </li>
);

export default Item;