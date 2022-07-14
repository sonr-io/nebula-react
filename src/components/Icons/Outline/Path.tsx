
import Path from "../../../assets/outline/Path.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PathIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Path} data-testid="PathIcon" className={classes} />
  );
}
