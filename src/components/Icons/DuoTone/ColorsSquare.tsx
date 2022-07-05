
import ColorsSquare from "../../../assets/duotone/ColorsSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ColorsSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ColorsSquare data-testid="ColorsSquareIcon" className={classes} />
  );
}
