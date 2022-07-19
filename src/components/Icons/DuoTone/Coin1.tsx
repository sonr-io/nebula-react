
import Coin1 from "../../../assets/duotone/Coin1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Coin1Icon({ className, dataTestid = "Coin1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Coin1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
