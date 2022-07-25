
import Forward from "../../../assets/duotone/Forward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ForwardIcon({ className, dataTestid = "ForwardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Forward data-testid={dataTestid} className={classes} {...rest} />
  );
}
