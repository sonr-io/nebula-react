
import Google from "../../../assets/filled/Google.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GoogleIcon({ className, dataTestid = "GoogleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Google data-testid={dataTestid} className={classes} {...rest} />
  );
}
