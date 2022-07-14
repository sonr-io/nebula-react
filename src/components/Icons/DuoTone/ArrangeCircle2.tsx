
import ArrangeCircle2 from "../../../assets/duotone/ArrangeCircle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeCircle2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrangeCircle2 data-testid="ArrangeCircle2Icon" className={classes} />
  );
}
