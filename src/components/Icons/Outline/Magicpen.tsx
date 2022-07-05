
import Magicpen from "../../../assets/outline/Magicpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MagicpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Magicpen data-testid="MagicpenIcon" className={classes} />
  );
}
