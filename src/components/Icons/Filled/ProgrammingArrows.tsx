
import ProgrammingArrows from "../../../assets/filled/ProgrammingArrows.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ProgrammingArrowsIcon({ className, dataTestid = "ProgrammingArrowsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ProgrammingArrows data-testid={dataTestid} className={classes} {...rest} />
  );
}
