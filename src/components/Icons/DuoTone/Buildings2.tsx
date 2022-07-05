
import Buildings2 from "../../../assets/duotone/Buildings2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Buildings2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Buildings2 data-testid="Buildings2Icon" className={classes} />
  );
}
