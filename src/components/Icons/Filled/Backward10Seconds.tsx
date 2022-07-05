
import Backward10Seconds from "../../../assets/filled/Backward10Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function Backward10SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Backward10Seconds data-testid="Backward10SecondsIcon" className={classes} />
  );
}
