
import Like1 from "../../../assets/filled/Like1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Like1Icon({ className, dataTestid = "Like1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Like1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
