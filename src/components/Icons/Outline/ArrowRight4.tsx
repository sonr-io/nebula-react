
import ArrowRight4 from "../../../assets/outline/ArrowRight4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight4Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrowRight4 data-testid="ArrowRight4Icon" className={classes} />
  );
}
