
import Receipt21 from "../../../assets/filled/Receipt21.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Receipt21Icon({ className, dataTestid = "Receipt21Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Receipt21 data-testid={dataTestid} className={classes} {...rest} />
  );
}
