import Person from "../../assets/Person.svg";

import { IconProps } from "../../types";

const cx = require('classnames');

export function PersonIcon(props: IconProps) {
  const classes = cx('w-4 h-4', props.className);
  return (
    <Person data-testid="person-svg" className={classes} />
  );
}
