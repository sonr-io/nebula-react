
import ColorsSquare from "../../../assets/outline/ColorsSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ColorsSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ColorsSquare data-testid="ColorsSquareIcon" className={classes} />
  );
}
