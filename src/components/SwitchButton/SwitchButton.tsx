import React, { useCallback, useMemo, useState, ReactElement } from 'react';
import { IconProps } from '../../types';
import { Filled } from "../Icons";

const cx = require('classnames');

interface SwitchButtonProps {
  initialValue?: boolean;
  disabled?: boolean;
  Icon?: (props: IconProps) => ReactElement;
  onClick: (on: boolean) => void;
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ initialValue, Icon, disabled, onClick }) => {
  const [on, setOn] = useState(!!initialValue);

  const containerClasses = useMemo(() => {
    return cx(
      'w-14 h-8 rounded-full p-0.5 cursor-pointer',
      on ? 'bg-primary' : 'bg-gray-700',
      { 'opacity-50 cursor-not-allowed': disabled }
    )
  }, [on, disabled]);

  const contentClasses = useMemo(() => cx('w-7 h-7 bg-white rounded-full flex items-center justify-center', { 'ml-6': on }), [on]);
  const iconClasses = useMemo(() => on ? 'fill-primary' : 'fill-gray-700', [on]);

  const handleSwitch = useCallback(() => {
    if (disabled) return;

    setOn(!on);
    onClick(!on);
  }, [onClick, on, disabled]);

  return (
    <div data-testid="nebula-switchbutton" className={containerClasses} onClick={handleSwitch}>
      <div data-testid="nebula-switchbutton-content" className={contentClasses}>
        {!!Icon && <Icon className={iconClasses} />}
      </div>
    </div>
  )
}
