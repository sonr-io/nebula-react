import React, { useState } from 'react';
import { DropdownProps } from '../../types/dropdownProps';
import { NebulaIcon } from '../Icons/NebulaIcon';
import { DropdownOption } from '../DropdownOption'

const cx = require('classnames');

export const Dropdown: React.FC<DropdownProps> = ({
    options
}) => {
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
                <div className='absolute w-52 rounded-md shadow-medium drop-shadow-medium'>
                    {(options && options.length) && (
                        options.map(({ title, leftIconName, leftIconType, rightIconName, rightIconType }, index) => {
                            const optionBorder = () => {
                                if(index === 0) return 'rounded-t-md'
                                if(index === options.length - 1) return 'rounded-b-md'
                                return ''
                            }

                            return (
                                <DropdownOption
                                    className={optionBorder()}
                                    key={index}
                                    title={title} 
                                    leftIconName={leftIconName} 
                                    leftIconType={leftIconType}
                                    rightIconName={rightIconName} 
                                    rightIconType={rightIconType} 
                                />
                            )}
                        )
                    )}
                </div>
            )}
        </div>
    )
}
