
import RepeatCircle from "../../../assets/filled/RepeatCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RepeatCircleIcon({ className, dataTestid = "RepeatCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <RepeatCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
