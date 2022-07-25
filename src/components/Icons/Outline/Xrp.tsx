
import Xrp from "../../../assets/outline/Xrp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function XrpIcon({ className, dataTestid = "XrpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Xrp data-testid={dataTestid} className={classes} {...rest} />
  );
}
