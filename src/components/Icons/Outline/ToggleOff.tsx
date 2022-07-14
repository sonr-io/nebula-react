
import ToggleOff from "../../../assets/outline/ToggleOff.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOffIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ToggleOff} data-testid="ToggleOffIcon" className={classes} />
  );
}
