
import ProgrammingArrow from "../../../assets/duotone/ProgrammingArrow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProgrammingArrowIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ProgrammingArrow data-testid="ProgrammingArrowIcon" className={classes} />
  );
}
