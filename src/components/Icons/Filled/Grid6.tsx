
import Grid6 from "../../../assets/filled/Grid6.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Grid6Icon({ className, dataTestid = "Grid6Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Grid6 data-testid={dataTestid} className={classes} {...rest} />
  );
}
