
import Grid7 from "../../../assets/duotone/Grid7.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid7Icon({ className, dataTestid = "Grid7Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid7 data-testid={dataTestid} className={classes} {...rest} />
  );
}
