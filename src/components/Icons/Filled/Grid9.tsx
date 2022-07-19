
import Grid9 from "../../../assets/filled/Grid9.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid9Icon({ className, dataTestid = "Grid9Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid9 data-testid={dataTestid} className={classes} {...rest} />
  );
}
