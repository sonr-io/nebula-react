
import Xiaomi from "../../../assets/filled/Xiaomi.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function XiaomiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Xiaomi data-testid="XiaomiIcon" className={classes} />
  );
}
