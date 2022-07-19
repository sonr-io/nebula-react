
import Crown1 from "../../../assets/duotone/Crown1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Crown1Icon({ className, dataTestid = "Crown1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Crown1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
