
import Scissor from "../../../assets/filled/Scissor.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ScissorIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Scissor data-testid="ScissorIcon" className={classes} />
  );
}
