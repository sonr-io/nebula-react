
import Call from "../../../assets/duotone/Call.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function CallIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Call data-testid="CallIcon" className={classes} />
  );
}
