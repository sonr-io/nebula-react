
import Diagram from "../../../assets/outline/Diagram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DiagramIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Diagram data-testid="DiagramIcon" className={classes} />
  );
}
