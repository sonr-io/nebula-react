
import Theta from "../../../assets/outline/Theta.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ThetaIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Theta data-testid="ThetaIcon" className={classes} />
  );
}
