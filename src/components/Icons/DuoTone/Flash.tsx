
import Flash from "../../../assets/duotone/Flash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashIcon({ className, dataTestid = "FlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Flash data-testid={dataTestid} className={classes} {...rest} />
  );
}
