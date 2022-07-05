
import Augur from "../../../assets/outline/Augur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AugurIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Augur data-testid="AugurIcon" className={classes} />
  );
}
