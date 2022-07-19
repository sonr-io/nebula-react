
import Direct from "../../../assets/duotone/Direct.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectIcon({ className, dataTestid = "DirectIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Direct data-testid={dataTestid} className={classes} {...rest} />
  );
}
