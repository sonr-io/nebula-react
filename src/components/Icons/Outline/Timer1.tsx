
import Timer1 from "../../../assets/outline/Timer1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Timer1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Timer1 data-testid="Timer1Icon" className={classes} />
  );
}
