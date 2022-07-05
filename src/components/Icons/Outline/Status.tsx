
import Status from "../../../assets/outline/Status.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function StatusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Status data-testid="StatusIcon" className={classes} />
  );
}
