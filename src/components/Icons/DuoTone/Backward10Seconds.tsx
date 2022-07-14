
import Backward10Seconds from "../../../assets/duotone/Backward10Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Backward10SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Backward10Seconds} data-testid="Backward10SecondsIcon" className={classes} />
  );
}
