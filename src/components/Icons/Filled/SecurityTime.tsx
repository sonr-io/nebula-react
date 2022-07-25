
import SecurityTime from "../../../assets/filled/SecurityTime.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SecurityTimeIcon({ className, dataTestid = "SecurityTimeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <SecurityTime data-testid={dataTestid} className={classes} {...rest} />
  );
}
