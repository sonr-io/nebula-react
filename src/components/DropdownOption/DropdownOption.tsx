import React from 'react';
import { DropdownOptionProps } from '../../types/dropdownOptionProps';
import { NebulaIcon } from '../Icons/NebulaIcon';

const cx = require('classnames');

export const DropdownOption: React.FC<DropdownOptionProps> = ({
    title,
    leftIconName,
    leftIconType = 'filled',
    rightIconName,
    rightIconType = 'filled',
}) => {
    const dropDownClass = cx()

    return (
        <div className='relative cursor-pointer'>
            {leftIconName && <NebulaIcon iconName={leftIconName} iconType={leftIconType} />}
            {title}
            {rightIconName && <NebulaIcon iconName={rightIconName} iconType={rightIconType} />}
        </div>
    )
}
