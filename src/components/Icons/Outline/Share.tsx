
import Share from "../../../assets/outline/Share.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShareIcon({ className, dataTestid = "ShareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Share data-testid={dataTestid} className={classes} {...rest} />
  );
}
