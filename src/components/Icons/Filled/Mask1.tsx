
import Mask1 from "../../../assets/filled/Mask1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Mask1Icon({ className, dataTestid = "Mask1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mask1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
