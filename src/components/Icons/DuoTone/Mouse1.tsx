
import Mouse1 from "../../../assets/duotone/Mouse1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Mouse1Icon({ className, dataTestid = "Mouse1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mouse1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
