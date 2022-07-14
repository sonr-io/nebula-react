
import Mouse from "../../../assets/filled/Mouse.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MouseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Mouse} data-testid="MouseIcon" className={classes} />
  );
}
