
import BagTick from "../../../assets/duotone/BagTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BagTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BagTick data-testid="BagTickIcon" className={classes} />
  );
}
