
import Pause from "../../../assets/filled/Pause.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PauseIcon({ className, dataTestid = "PauseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Pause data-testid={dataTestid} className={classes} {...rest} />
  );
}
