
import ToggleOnCircle from "../../../assets/outline/ToggleOnCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOnCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ToggleOnCircle} data-testid="ToggleOnCircleIcon" className={classes} />
  );
}
