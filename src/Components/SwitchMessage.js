import React from 'react';

const SwitchMessage = ({ on }) => {
    return (
        <p>The light is { on ? 'on' : 'off' }</p>
    )
}

export default SwitchMessage;