
import Check from "../../../assets/duotone/Check.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CheckIcon({ className, dataTestid = "CheckIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Check data-testid={dataTestid} className={classes} {...rest} />
  );
}
