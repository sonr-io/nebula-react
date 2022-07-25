
import ShieldSlash from "../../../assets/duotone/ShieldSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldSlashIcon({ className, dataTestid = "ShieldSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ShieldSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
