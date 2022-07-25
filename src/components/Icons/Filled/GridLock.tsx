
import GridLock from "../../../assets/filled/GridLock.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridLockIcon({ className, dataTestid = "GridLockIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GridLock data-testid={dataTestid} className={classes} {...rest} />
  );
}
