
import Receipt1 from "../../../assets/duotone/Receipt1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Receipt1Icon({ className, dataTestid = "Receipt1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Receipt1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
