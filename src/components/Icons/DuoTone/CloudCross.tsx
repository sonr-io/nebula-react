
import CloudCross from "../../../assets/duotone/CloudCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudCrossIcon({ className, dataTestid = "CloudCrossIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudCross data-testid={dataTestid} className={classes} {...rest} />
  );
}
