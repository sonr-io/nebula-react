
import Path2 from "../../../assets/duotone/Path2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Path2Icon({ className, dataTestid = "Path2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Path2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
