
import Arrow2 from "../../../assets/duotone/Arrow2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Arrow2Icon({ className, dataTestid = "Arrow2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Arrow2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
