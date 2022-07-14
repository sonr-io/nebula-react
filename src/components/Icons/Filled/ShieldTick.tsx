
import ShieldTick from "../../../assets/filled/ShieldTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ShieldTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ShieldTick} data-testid="ShieldTickIcon" className={classes} />
  );
}
