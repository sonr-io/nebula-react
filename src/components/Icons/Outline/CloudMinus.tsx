
import CloudMinus from "../../../assets/outline/CloudMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudMinusIcon({ className, dataTestid = "CloudMinusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CloudMinus data-testid={dataTestid} className={classes} {...rest} />
  );
}
