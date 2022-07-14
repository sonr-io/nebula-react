
import ArrangeCircle2 from "../../../assets/outline/ArrangeCircle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeCircle2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArrangeCircle2} data-testid="ArrangeCircle2Icon" className={classes} />
  );
}
