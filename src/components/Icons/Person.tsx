import cx from 'classnames';
import Person from "../../assets/Person.svg";

import { IconProps } from "../../types";

export function PersonIcon(props: IconProps) {
  const classes = cx('w-4 h-4 mr-2', props.className);
  return (
    <Person data-testid="person-svg" className={classes} />
  );
}
