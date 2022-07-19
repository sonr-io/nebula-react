
import Status from "../../../assets/filled/Status.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StatusIcon({ className, dataTestid = "StatusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Status data-testid={dataTestid} className={classes} {...rest} />
  );
}
