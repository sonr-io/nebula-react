
import Dai from "../../../assets/duotone/Dai.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DaiIcon({ className, dataTestid = "DaiIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dai data-testid={dataTestid} className={classes} {...rest} />
  );
}
