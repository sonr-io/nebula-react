
import Grid4 from "../../../assets/outline/Grid4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid4Icon({ className, dataTestid = "Grid4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
