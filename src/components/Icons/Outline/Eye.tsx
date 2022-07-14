
import Eye from "../../../assets/outline/Eye.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EyeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Eye data-testid="EyeIcon" className={classes} />
  );
}
