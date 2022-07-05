
import Icon2 from "../../../assets/outline/Icon2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Icon2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Icon2 data-testid="Icon2Icon" className={classes} />
  );
}
