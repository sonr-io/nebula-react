
import MoreCircle from "../../../assets/duotone/MoreCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MoreCircleIcon({ className, dataTestid = "MoreCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MoreCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
