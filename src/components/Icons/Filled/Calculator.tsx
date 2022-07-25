
import Calculator from "../../../assets/filled/Calculator.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalculatorIcon({ className, dataTestid = "CalculatorIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Calculator data-testid={dataTestid} className={classes} {...rest} />
  );
}
