import React from 'react';

const SwitchButton = ({ onToggle }) => {
    return (
        <button onClick={onToggle}>Toggle</button>
    )
}

export default SwitchButton;