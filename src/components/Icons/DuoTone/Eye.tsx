
import Eye from "../../../assets/duotone/Eye.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EyeIcon({ className, dataTestid = "EyeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Eye data-testid={dataTestid} className={classes} {...rest} />
  );
}
