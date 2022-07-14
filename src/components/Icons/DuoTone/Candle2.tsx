
import Candle2 from "../../../assets/duotone/Candle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Candle2Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Candle2} data-testid="Candle2Icon" className={classes} />
  );
}
