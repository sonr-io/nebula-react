
import Grid8 from "../../../assets/duotone/Grid8.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid8Icon({ className, dataTestid = "Grid8Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid8 data-testid={dataTestid} className={classes} {...rest} />
  );
}
