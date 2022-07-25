
import Apple from "../../../assets/duotone/Apple.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AppleIcon({ className, dataTestid = "AppleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Apple data-testid={dataTestid} className={classes} {...rest} />
  );
}
