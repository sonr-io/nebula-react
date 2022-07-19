
import Cake from "../../../assets/duotone/Cake.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CakeIcon({ className, dataTestid = "CakeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cake data-testid={dataTestid} className={classes} {...rest} />
  );
}
