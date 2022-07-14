
import ReceiveSquare from "../../../assets/outline/ReceiveSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiveSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ReceiveSquare} data-testid="ReceiveSquareIcon" className={classes} />
  );
}
