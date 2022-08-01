import React from 'react';
import { DropdownOptionProps } from '../../types/dropdownOptionProps';
import { NebulaIcon } from '../Icons/NebulaIcon';

export const DropdownOption: React.FC<DropdownOptionProps> = ({
    title,
    className,
    leftIconName,
    leftIconType = 'outline',
    rightIconName,
    rightIconType = 'outline',
}) => {
    const cx = require('classnames');
    
    const classes = cx(className, 'flex items-center cursor-pointer px-8 h-10 text-gray-800 hover:text-white hover:bg-primary-light hover:fill-white')

    return (
        <div className={classes}>
            {leftIconName && <NebulaIcon iconName={leftIconName} iconType={leftIconType} className="w-6 h-6 mr-2.5" />}
                <span className="text-custom-xs font-extrabold">{title}</span>
            {rightIconName && <NebulaIcon iconName={rightIconName} iconType={rightIconType} className="w-6 h-6 ml-2.5" />}
        </div>
    )
}
