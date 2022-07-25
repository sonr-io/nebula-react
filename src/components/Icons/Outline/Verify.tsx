
import Verify from "../../../assets/outline/Verify.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VerifyIcon({ className, dataTestid = "VerifyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Verify data-testid={dataTestid} className={classes} {...rest} />
  );
}
