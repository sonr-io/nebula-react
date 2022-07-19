
import Timer1 from "../../../assets/filled/Timer1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Timer1Icon({ className, dataTestid = "Timer1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Timer1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
