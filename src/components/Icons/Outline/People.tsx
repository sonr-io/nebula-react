
import People from "../../../assets/outline/People.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PeopleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <People data-testid="PeopleIcon" className={classes} />
  );
}
