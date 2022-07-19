
import Glass1 from "../../../assets/outline/Glass1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Glass1Icon({ className, dataTestid = "Glass1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Glass1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
