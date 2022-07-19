
import CloudChange from "../../../assets/duotone/CloudChange.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudChangeIcon({ className, dataTestid = "CloudChangeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudChange data-testid={dataTestid} className={classes} {...rest} />
  );
}
