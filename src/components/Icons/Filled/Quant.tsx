
import Quant from "../../../assets/filled/Quant.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuantIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Quant data-testid="QuantIcon" className={classes} />
  );
}
