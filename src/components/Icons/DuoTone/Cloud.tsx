
import Cloud from "../../../assets/duotone/Cloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloudIcon({ className, dataTestid = "CloudIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cloud data-testid={dataTestid} className={classes} {...rest} />
  );
}
