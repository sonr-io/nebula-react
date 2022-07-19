
import Building4 from "../../../assets/duotone/Building4.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Building4Icon({ className, dataTestid = "Building4Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Building4 data-testid={dataTestid} className={classes} {...rest} />
  );
}
