
import CallAdd from "../../../assets/duotone/CallAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallAddIcon({ className, dataTestid = "CallAddIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallAdd data-testid={dataTestid} className={classes} {...rest} />
  );
}
