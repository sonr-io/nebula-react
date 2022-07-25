
import Facebook from "../../../assets/duotone/Facebook.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FacebookIcon({ className, dataTestid = "FacebookIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Facebook data-testid={dataTestid} className={classes} {...rest} />
  );
}
