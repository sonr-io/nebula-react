
import Wanchain from "../../../assets/outline/Wanchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WanchainIcon({ className, dataTestid = "WanchainIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Wanchain data-testid={dataTestid} className={classes} {...rest} />
  );
}
