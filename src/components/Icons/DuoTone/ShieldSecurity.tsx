
import ShieldSecurity from "../../../assets/duotone/ShieldSecurity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShieldSecurityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldSecurity data-testid="ShieldSecurityIcon" className={classes} />
  );
}
