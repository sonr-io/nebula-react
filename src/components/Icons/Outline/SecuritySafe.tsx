
import SecuritySafe from "../../../assets/outline/SecuritySafe.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecuritySafeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SecuritySafe data-testid="SecuritySafeIcon" className={classes} />
  );
}
