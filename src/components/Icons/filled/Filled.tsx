import React from 'react';

export const Filled: React.FC<{ name: string }> = ({ name }) => {
  const Icon = require(`../../assets/filled/${name}.svg`);

  return <Icon />
}