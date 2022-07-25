
import Aave from "../../../assets/outline/Aave.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AaveIcon({ className, dataTestid = "AaveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Aave data-testid={dataTestid} className={classes} {...rest} />
  );
}
