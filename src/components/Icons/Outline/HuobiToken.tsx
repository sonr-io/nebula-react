
import HuobiToken from "../../../assets/outline/HuobiToken.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HuobiTokenIcon({ className, dataTestid = "HuobiTokenIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HuobiToken data-testid={dataTestid} className={classes} {...rest} />
  );
}
