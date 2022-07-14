
import DollarSquare from "../../../assets/duotone/DollarSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DollarSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DollarSquare data-testid="DollarSquareIcon" className={classes} />
  );
}
