
import Receipt1 from "../../../assets/duotone/Receipt1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Receipt1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Receipt1 data-testid="Receipt1Icon" className={classes} />
  );
}
