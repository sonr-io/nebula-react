
import LinkCircle from "../../../assets/duotone/LinkCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LinkCircleIcon({ className, dataTestid = "LinkCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LinkCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
