
import EyeSlash from "../../../assets/duotone/EyeSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EyeSlashIcon({ className, dataTestid = "EyeSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EyeSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
