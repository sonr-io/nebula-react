
import Grid2 from "../../../assets/outline/Grid2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid2Icon({ className, dataTestid = "Grid2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
