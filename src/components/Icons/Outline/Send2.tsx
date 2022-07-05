
import Send2 from "../../../assets/outline/Send2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Send2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Send2 data-testid="Send2Icon" className={classes} />
  );
}
