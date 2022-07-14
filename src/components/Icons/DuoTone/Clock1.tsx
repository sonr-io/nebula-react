
import Clock1 from "../../../assets/duotone/Clock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Clock1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Clock1} data-testid="Clock1Icon" className={classes} />
  );
}
