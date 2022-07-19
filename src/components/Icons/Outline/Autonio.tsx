
import Autonio from "../../../assets/outline/Autonio.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AutonioIcon({ className, dataTestid = "AutonioIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Autonio data-testid={dataTestid} className={classes} {...rest} />
  );
}
