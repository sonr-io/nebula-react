
import ArrowRight2 from "../../../assets/outline/ArrowRight2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowRight2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrowRight2} data-testid="ArrowRight2Icon" className={classes} />
  );
}
