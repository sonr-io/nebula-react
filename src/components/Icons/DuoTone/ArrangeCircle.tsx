
import ArrangeCircle from "../../../assets/duotone/ArrangeCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrangeCircleIcon({ className, dataTestid = "ArrangeCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrangeCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
