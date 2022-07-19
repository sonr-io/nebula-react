
import Grid1 from "../../../assets/filled/Grid1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid1Icon({ className, dataTestid = "Grid1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
