
import Coin1 from "../../../assets/duotone/Coin1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Coin1Icon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Coin1} data-testid="Coin1Icon" className={classes} />
  );
}
