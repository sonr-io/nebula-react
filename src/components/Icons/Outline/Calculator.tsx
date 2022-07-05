
import Calculator from "../../../assets/outline/Calculator.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CalculatorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Calculator data-testid="CalculatorIcon" className={classes} />
  );
}
