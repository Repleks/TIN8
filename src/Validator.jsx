import React from "react";

const Validator = ({ value, onChange }) => (
    <div>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        {value.length < 3 && value.length > 0 && (
            <p style={{ color: "red" }}>Co najmniej 3 znaki</p>
        )}
    </div>
);

export default Validator;