
import Instagram from "../../../assets/filled/Instagram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function InstagramIcon({ className, dataTestid = "InstagramIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Instagram data-testid={dataTestid} className={classes} {...rest} />
  );
}
