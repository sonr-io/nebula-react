
import Building3 from "../../../assets/duotone/Building3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Building3Icon({ className, dataTestid = "Building3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Building3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
