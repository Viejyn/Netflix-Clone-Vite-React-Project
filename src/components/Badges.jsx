import React from "react";

const Badges = ({ list, title, color }) => {
    return (
        <div>
            <h3>{title}</h3>
            {list.map((item) => (
                <p key={item.id} className={`badge ${color} me-2 mb-3`}>
                    {item.name}
                </p>
            ))}
        </div>
    );
};

export default Badges;