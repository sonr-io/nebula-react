import React from 'react';

export const DuoTone: React.FC<{ name: string }> = ({ name }) => {
  const Icon = require(`../../assets/duotone/${name}.svg`);

  return <Icon />
}