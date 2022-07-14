
import Box2 from "../../../assets/outline/Box2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Box2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Box2} data-testid="Box2Icon" className={classes} />
  );
}
