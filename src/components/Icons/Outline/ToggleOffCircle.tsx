
import ToggleOffCircle from "../../../assets/outline/ToggleOffCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOffCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ToggleOffCircle} data-testid="ToggleOffCircleIcon" className={classes} />
  );
}
