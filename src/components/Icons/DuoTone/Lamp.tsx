
import Lamp from "../../../assets/duotone/Lamp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function LampIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Lamp data-testid="LampIcon" className={classes} />
  );
}
