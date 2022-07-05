
import Share from "../../../assets/outline/Share.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Share data-testid="ShareIcon" className={classes} />
  );
}
