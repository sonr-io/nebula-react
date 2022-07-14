
import ShieldSecurity from "../../../assets/duotone/ShieldSecurity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSecurityIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShieldSecurity} data-testid="ShieldSecurityIcon" className={classes} />
  );
}
