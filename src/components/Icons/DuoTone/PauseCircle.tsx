
import PauseCircle from "../../../assets/duotone/PauseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PauseCircleIcon({ className, dataTestid = "PauseCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PauseCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
