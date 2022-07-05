
import Firstline from "../../../assets/outline/Firstline.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FirstlineIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Firstline data-testid="FirstlineIcon" className={classes} />
  );
}
