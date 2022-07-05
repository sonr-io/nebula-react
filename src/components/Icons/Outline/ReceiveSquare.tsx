
import ReceiveSquare from "../../../assets/outline/ReceiveSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ReceiveSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiveSquare data-testid="ReceiveSquareIcon" className={classes} />
  );
}
