
import Next from "../../../assets/outline/Next.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NextIcon({ className, dataTestid = "NextIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Next data-testid={dataTestid} className={classes} {...rest} />
  );
}
