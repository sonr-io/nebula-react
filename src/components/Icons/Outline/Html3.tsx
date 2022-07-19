
import Html3 from "../../../assets/outline/Html3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Html3Icon({ className, dataTestid = "Html3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Html3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
