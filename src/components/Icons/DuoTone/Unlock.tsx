
import Unlock from "../../../assets/duotone/Unlock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function UnlockIcon({ className, dataTestid = "UnlockIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Unlock data-testid={dataTestid} className={classes} {...rest} />
  );
}
