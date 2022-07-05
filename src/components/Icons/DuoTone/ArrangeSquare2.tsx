
import ArrangeSquare2 from "../../../assets/duotone/ArrangeSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArrangeSquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArrangeSquare2 data-testid="ArrangeSquare2Icon" className={classes} />
  );
}
