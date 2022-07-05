
import ArrowRight2 from "../../../assets/duotone/ArrowRight2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrowRight2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowRight2 data-testid="ArrowRight2Icon" className={classes} />
  );
}
