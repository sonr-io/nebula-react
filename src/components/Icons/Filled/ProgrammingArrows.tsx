
import ProgrammingArrows from "../../../assets/filled/ProgrammingArrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProgrammingArrowsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ProgrammingArrows} data-testid="ProgrammingArrowsIcon" className={classes} />
  );
}
