
import Diagram from "../../../assets/duotone/Diagram.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DiagramIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Diagram} data-testid="DiagramIcon" className={classes} />
  );
}
