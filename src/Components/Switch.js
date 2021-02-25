import React, { Fragment } from 'react';
import SwitchMessage from './SwitchMessage';
import SwitchButton from './SwitchButton';

const Switch = ({ on, onToggle }) => {
    return(
        <Fragment>
            <SwitchMessage on={on} />
            <SwitchButton onToggle={onToggle} />
        </Fragment>
    )
}

export default Switch;