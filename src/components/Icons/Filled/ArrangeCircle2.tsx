
import ArrangeCircle2 from "../../../assets/filled/ArrangeCircle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrangeCircle2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrangeCircle2 data-testid="ArrangeCircle2Icon" className={classes} />
  );
}
