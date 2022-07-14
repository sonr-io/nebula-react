
import Scroll from "../../../assets/outline/Scroll.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScrollIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Scroll} data-testid="ScrollIcon" className={classes} />
  );
}
