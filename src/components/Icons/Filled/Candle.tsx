
import Candle from "../../../assets/filled/Candle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CandleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Candle data-testid="CandleIcon" className={classes} />
  );
}
