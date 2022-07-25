
import Candle2 from "../../../assets/duotone/Candle2.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Candle2Icon({ className, dataTestid = "Candle2Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Candle2 data-testid={dataTestid} className={classes} {...rest} />
  );
}
