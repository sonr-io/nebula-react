
import ShieldSecurity from "../../../assets/outline/ShieldSecurity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSecurityIcon({ className, dataTestid = "ShieldSecurityIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShieldSecurity data-testid={dataTestid} className={classes} {...rest} />
  );
}
