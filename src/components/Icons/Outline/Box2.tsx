
import Box2 from "../../../assets/outline/Box2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Box2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Box2 data-testid="Box2Icon" className={classes} />
  );
}
