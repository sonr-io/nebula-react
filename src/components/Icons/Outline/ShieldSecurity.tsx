
import ShieldSecurity from "../../../assets/outline/ShieldSecurity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSecurityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldSecurity data-testid="ShieldSecurityIcon" className={classes} />
  );
}