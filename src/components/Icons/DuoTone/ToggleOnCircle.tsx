
import ToggleOnCircle from "../../../assets/duotone/ToggleOnCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ToggleOnCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ToggleOnCircle data-testid="ToggleOnCircleIcon" className={classes} />
  );
}
