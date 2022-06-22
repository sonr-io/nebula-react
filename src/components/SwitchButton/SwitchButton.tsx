import React, { useCallback, useMemo, useState } from 'react';

const cx = require('classnames');

interface SwitchButtonProps {
  initialValue?: boolean;
  icon?: string;
  disabled: boolean;
  onClick: (on: boolean) => void;
}

export const SwitchButton: React.FC<SwitchButtonProps> = ({ initialValue, disabled, onClick }) => {
  const [on, setOn] = useState(!!initialValue);

  const containerClasses = useMemo(() => {
    return cx(
      'w-14 h-8 rounded-full p-0.5 cursor-pointer',
      on ? 'bg-primary' : 'bg-gray-700',
      { 'opacity-50 cursor-not-allowed': disabled }
    )
  }, [on, disabled]);

  const contentClasses = useMemo(() => cx('w-7 h-7 bg-white rounded-full', { 'ml-6': on }), [on])

  const handleSwitch = useCallback(() => {
    if (disabled) return;

    setOn(on => !on);
    onClick(on);
  }, [onClick, on, disabled]);

  return (
    <div className={containerClasses} onClick={handleSwitch}>
      <div className={contentClasses} />
    </div>
  )
}
