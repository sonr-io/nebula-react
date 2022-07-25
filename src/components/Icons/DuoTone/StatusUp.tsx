
import StatusUp from "../../../assets/duotone/StatusUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StatusUpIcon({ className, dataTestid = "StatusUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <StatusUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
