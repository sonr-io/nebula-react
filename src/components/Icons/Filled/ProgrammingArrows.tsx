
import ProgrammingArrows from "../../../assets/filled/ProgrammingArrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ProgrammingArrowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProgrammingArrows data-testid="ProgrammingArrowsIcon" className={classes} />
  );
}
