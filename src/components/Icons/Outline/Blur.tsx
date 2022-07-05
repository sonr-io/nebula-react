
import Blur from "../../../assets/outline/Blur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BlurIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Blur data-testid="BlurIcon" className={classes} />
  );
}
