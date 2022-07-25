
import SafeHome from "../../../assets/outline/SafeHome.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SafeHomeIcon({ className, dataTestid = "SafeHomeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SafeHome data-testid={dataTestid} className={classes} {...rest} />
  );
}
