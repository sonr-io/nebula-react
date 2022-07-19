
import Electricity from "../../../assets/duotone/Electricity.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElectricityIcon({ className, dataTestid = "ElectricityIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Electricity data-testid={dataTestid} className={classes} {...rest} />
  );
}
