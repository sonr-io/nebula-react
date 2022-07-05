
import BoxTick from "../../../assets/duotone/BoxTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function BoxTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <BoxTick data-testid="BoxTickIcon" className={classes} />
  );
}
