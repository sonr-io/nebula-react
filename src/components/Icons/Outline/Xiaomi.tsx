
import Xiaomi from "../../../assets/outline/Xiaomi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function XiaomiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Xiaomi} data-testid="XiaomiIcon" className={classes} />
  );
}
