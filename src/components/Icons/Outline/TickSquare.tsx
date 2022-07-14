
import TickSquare from "../../../assets/outline/TickSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TickSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TickSquare data-testid="TickSquareIcon" className={classes} />
  );
}
