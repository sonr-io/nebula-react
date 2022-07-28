import React, { useMemo } from 'react';
import { ChipProps, ChipSkin } from '../../types/chipProps';
import { NebulaIcon } from "../Icons/NebulaIcon";

const cx = require('classnames');

export const chipsSkins: { [key in ChipSkin]: string } = {
  default: 'bg-skin-subtle-inverted bg-opacity-10 text-skin-subtle-inverted',
  primary: 'bg-skin-primary text-skin-primary',
  critical: 'bg-red-700 text-skin-primary',
}

export const Chip: React.FC<ChipProps> = ({ skin = 'default', text, onRemove }) => {
  const chipClasses = useMemo(() => cx('flex items-center rounded-sm w-fit px-2 py-1.5', chipsSkins[skin]), [skin]);

  return (
    <div className={chipClasses}>
      <span>{text}</span>
      {onRemove && <span className='cursor-pointer' onClick={onRemove}><NebulaIcon iconName='Close' iconType='outline' className='ml-2 fill-current' /></span>}
    </div>
  )
}
