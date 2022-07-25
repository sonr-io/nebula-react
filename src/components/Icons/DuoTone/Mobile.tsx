
import Mobile from "../../../assets/duotone/Mobile.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MobileIcon({ className, dataTestid = "MobileIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mobile data-testid={dataTestid} className={classes} {...rest} />
  );
}
