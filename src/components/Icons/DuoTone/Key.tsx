
import Key from "../../../assets/duotone/Key.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function KeyIcon({ className, dataTestid = "KeyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Key data-testid={dataTestid} className={classes} {...rest} />
  );
}
