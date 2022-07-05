
import BagTick from "../../../assets/filled/BagTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BagTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagTick data-testid="BagTickIcon" className={classes} />
  );
}
