
import GooglePlay from "../../../assets/outline/GooglePlay.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GooglePlayIcon({ className, dataTestid = "GooglePlayIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GooglePlay data-testid={dataTestid} className={classes} {...rest} />
  );
}
