
import Weight1 from "../../../assets/duotone/Weight1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Weight1Icon({ className, dataTestid = "Weight1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Weight1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
