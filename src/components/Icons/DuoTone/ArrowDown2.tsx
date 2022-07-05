
import ArrowDown2 from "../../../assets/duotone/ArrowDown2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowDown2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowDown2 data-testid="ArrowDown2Icon" className={classes} />
  );
}
