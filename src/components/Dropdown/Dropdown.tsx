import React, { useState } from 'react';
import { DropdownProps } from '../../types/dropdownProps';
import { NebulaIcon } from '../Icons/NebulaIcon';

const cx = require('classnames');

export const Dropdown: React.FC<DropdownProps> = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const dropDownClass = cx()

    return (
        <div className='relative cursor-pointer'>
            <NebulaIcon 
                onClick={toggleDropdown} 
                iconName={`${isOpen ? 'ArrowUp1' : 'ArrowDown'}`} 
                iconType='filled' 
                className={dropDownClass} 
            />
            {isOpen && (
                <div className='absolute'>
                    <div>opt1</div>
                    <div>opt2</div>
                    <div>opt3</div>
                    <div>opt4</div>
                    <div>opt5</div>
                    <div>opt6</div>
                </div>
            )}
        </div>
    )
}
