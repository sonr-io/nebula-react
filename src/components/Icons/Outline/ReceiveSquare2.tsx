
import ReceiveSquare2 from "../../../assets/outline/ReceiveSquare2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ReceiveSquare2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ReceiveSquare2 data-testid="ReceiveSquare2Icon" className={classes} />
  );
}
