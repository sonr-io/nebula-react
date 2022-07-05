
import Arrow3 from "../../../assets/duotone/Arrow3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Arrow3Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Arrow3 data-testid="Arrow3Icon" className={classes} />
  );
}
