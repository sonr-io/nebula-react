
import Grid5 from "../../../assets/filled/Grid5.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid5Icon({ className, dataTestid = "Grid5Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid5 data-testid={dataTestid} className={classes} {...rest} />
  );
}
