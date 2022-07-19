
import SecuritySafe from "../../../assets/filled/SecuritySafe.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecuritySafeIcon({ className, dataTestid = "SecuritySafeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SecuritySafe data-testid={dataTestid} className={classes} {...rest} />
  );
}
