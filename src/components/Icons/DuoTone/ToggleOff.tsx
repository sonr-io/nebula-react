
import ToggleOff from "../../../assets/duotone/ToggleOff.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOffIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ToggleOff data-testid="ToggleOffIcon" className={classes} />
  );
}
