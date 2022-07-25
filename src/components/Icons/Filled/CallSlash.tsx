
import CallSlash from "../../../assets/filled/CallSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CallSlashIcon({ className, dataTestid = "CallSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CallSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
