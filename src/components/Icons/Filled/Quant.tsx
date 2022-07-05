
import Quant from "../../../assets/filled/Quant.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function QuantIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Quant data-testid="QuantIcon" className={classes} />
  );
}
