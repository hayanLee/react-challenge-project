import React from 'react';

export default function Button({ label, onClick: handleClick }) {
    return <button onClick={handleClick}>{label}</button>;
}
