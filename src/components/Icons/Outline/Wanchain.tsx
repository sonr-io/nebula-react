
import Wanchain from "../../../assets/outline/Wanchain.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WanchainIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Wanchain data-testid="WanchainIcon" className={classes} />
  );
}
