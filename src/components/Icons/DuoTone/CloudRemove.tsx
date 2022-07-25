
import CloudRemove from "../../../assets/duotone/CloudRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudRemoveIcon({ className, dataTestid = "CloudRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
