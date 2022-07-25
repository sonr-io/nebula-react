
import Lock1 from "../../../assets/duotone/Lock1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Lock1Icon({ className, dataTestid = "Lock1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Lock1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
