
import Broom from "../../../assets/duotone/Broom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BroomIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Broom data-testid="BroomIcon" className={classes} />
  );
}
