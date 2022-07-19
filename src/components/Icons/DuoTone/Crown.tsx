
import Crown from "../../../assets/duotone/Crown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CrownIcon({ className, dataTestid = "CrownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Crown data-testid={dataTestid} className={classes} {...rest} />
  );
}
