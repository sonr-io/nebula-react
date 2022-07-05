
import ArrowRight1 from "../../../assets/duotone/ArrowRight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowRight1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowRight1 data-testid="ArrowRight1Icon" className={classes} />
  );
}
