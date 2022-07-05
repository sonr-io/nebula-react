
import SendSquare from "../../../assets/outline/SendSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SendSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SendSquare data-testid="SendSquareIcon" className={classes} />
  );
}
