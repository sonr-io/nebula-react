
import Square3 from "../../../assets/duotone/Square3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Square3Icon({ className, dataTestid = "Square3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Square3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
