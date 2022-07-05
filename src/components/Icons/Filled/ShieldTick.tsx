
import ShieldTick from "../../../assets/filled/ShieldTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ShieldTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ShieldTick data-testid="ShieldTickIcon" className={classes} />
  );
}
