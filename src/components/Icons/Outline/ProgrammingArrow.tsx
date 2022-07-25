
import ProgrammingArrow from "../../../assets/outline/ProgrammingArrow.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProgrammingArrowIcon({ className, dataTestid = "ProgrammingArrowIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProgrammingArrow data-testid={dataTestid} className={classes} {...rest} />
  );
}
