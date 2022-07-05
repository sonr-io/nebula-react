
import Path from "../../../assets/outline/Path.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PathIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Path data-testid="PathIcon" className={classes} />
  );
}
