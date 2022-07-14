
import Calculator from "../../../assets/outline/Calculator.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CalculatorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Calculator} data-testid="CalculatorIcon" className={classes} />
  );
}
