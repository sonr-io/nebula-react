
import RefreshCircle from "../../../assets/filled/RefreshCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RefreshCircleIcon({ className, dataTestid = "RefreshCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RefreshCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
