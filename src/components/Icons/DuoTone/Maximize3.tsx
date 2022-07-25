
import Maximize3 from "../../../assets/duotone/Maximize3.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Maximize3Icon({ className, dataTestid = "Maximize3Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Maximize3 data-testid={dataTestid} className={classes} {...rest} />
  );
}
