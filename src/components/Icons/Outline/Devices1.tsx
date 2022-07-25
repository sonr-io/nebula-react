
import Devices1 from "../../../assets/outline/Devices1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Devices1Icon({ className, dataTestid = "Devices1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Devices1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
