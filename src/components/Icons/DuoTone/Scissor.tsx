
import Scissor from "../../../assets/duotone/Scissor.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ScissorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scissor data-testid="ScissorIcon" className={classes} />
  );
}
