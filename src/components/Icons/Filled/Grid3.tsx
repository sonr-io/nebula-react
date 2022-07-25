
import Grid3 from "../../../assets/filled/Grid3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid3Icon({ className, dataTestid = "Grid3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
