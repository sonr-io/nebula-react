
import Candle from "../../../assets/outline/Candle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CandleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Candle} data-testid="CandleIcon" className={classes} />
  );
}
