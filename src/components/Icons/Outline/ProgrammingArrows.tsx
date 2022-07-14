
import ProgrammingArrows from "../../../assets/outline/ProgrammingArrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProgrammingArrowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProgrammingArrows data-testid="ProgrammingArrowsIcon" className={classes} />
  );
}
