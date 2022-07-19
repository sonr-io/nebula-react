
import Quant from "../../../assets/filled/Quant.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuantIcon({ className, dataTestid = "QuantIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Quant data-testid={dataTestid} className={classes} {...rest} />
  );
}
