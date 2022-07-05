
import Vuesax from "../../../assets/outline/Vuesax.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VuesaxIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Vuesax data-testid="VuesaxIcon" className={classes} />
  );
}
