
import Backward15Seconds from "../../../assets/duotone/Backward15Seconds.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Backward15SecondsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Backward15Seconds data-testid="Backward15SecondsIcon" className={classes} />
  );
}