
import Copy from "../../../assets/outline/Copy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CopyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Copy data-testid="CopyIcon" className={classes} />
  );
}
