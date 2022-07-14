
import StopCircle from "../../../assets/filled/StopCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StopCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <StopCircle data-testid="StopCircleIcon" className={classes} />
  );
}