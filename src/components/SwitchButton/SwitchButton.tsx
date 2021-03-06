import React, { useCallback, useMemo, useState, ReactElement } from 'react';
import { IconNames, IconTypes } from '../../types/iconProps';
import { NebulaIcon } from '../Icons';

const cx = require('classnames');

interface SwitchButtonProps {
  initialValue?: boolean;
  disabled?: boolean;
  iconName?: IconNames;
  iconType?: IconTypes;
  onClick: (on: boolean) => void;
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ initialValue, iconName, iconType, disabled, onClick }) => {
  const [on, setOn] = useState(!!initialValue);

  const containerClasses = useMemo(() => {
    return cx(
      'overflow-hidden w-14 h-8 rounded-full p-0.5 cursor-pointer',
      on ? 'bg-primary' : 'bg-gray-700',
      { 'opacity-50 cursor-not-allowed': disabled }
    )
  }, [on, disabled]);

  const contentClasses = useMemo(() => cx('w-7 h-7 bg-white rounded-full flex items-center justify-center', { 'ml-auto': on }), [on]);
  const iconClasses = useMemo(() => on ? 'fill-primary' : 'fill-gray-700', [on]);

  const handleSwitch = useCallback(() => {
    if (disabled) return;

    setOn(!on);
    onClick(!on);
  }, [onClick, on, disabled]);

  return (
    <div data-testid="nebula-switchbutton" className={containerClasses} onClick={handleSwitch}>
      <div data-testid="nebula-switchbutton-content" className={contentClasses}>
        {iconName && <NebulaIcon iconName={iconName} iconType={iconType} className={iconClasses} />}
      </div>
    </div>
  )
}
