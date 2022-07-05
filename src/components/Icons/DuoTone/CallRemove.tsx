
import CallRemove from "../../../assets/duotone/CallRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallRemoveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CallRemove data-testid="CallRemoveIcon" className={classes} />
  );
}
