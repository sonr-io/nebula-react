
import Award from "../../../assets/outline/Award.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AwardIcon({ className, dataTestid = "AwardIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Award data-testid={dataTestid} className={classes} {...rest} />
  );
}
