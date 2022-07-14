
import Blur from "../../../assets/outline/Blur.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BlurIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Blur} data-testid="BlurIcon" className={classes} />
  );
}
