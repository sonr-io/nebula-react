
import Minimize from "../../../assets/duotone/Minimize.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MinimizeIcon({ className, dataTestid = "MinimizeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Minimize data-testid={dataTestid} className={classes} {...rest} />
  );
}
