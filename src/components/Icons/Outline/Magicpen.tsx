
import Magicpen from "../../../assets/outline/Magicpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MagicpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Magicpen} data-testid="MagicpenIcon" className={classes} />
  );
}
