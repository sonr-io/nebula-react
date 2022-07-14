
import RepeatCircle from "../../../assets/filled/RepeatCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeatCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={RepeatCircle} data-testid="RepeatCircleIcon" className={classes} />
  );
}
