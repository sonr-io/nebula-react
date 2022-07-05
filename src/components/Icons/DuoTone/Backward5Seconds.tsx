
import Backward5Seconds from "../../../assets/duotone/Backward5Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Backward5SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Backward5Seconds data-testid="Backward5SecondsIcon" className={classes} />
  );
}
