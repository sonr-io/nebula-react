
import Twitter from "../../../assets/duotone/Twitter.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TwitterIcon({ className, dataTestid = "TwitterIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Twitter data-testid={dataTestid} className={classes} {...rest} />
  );
}
