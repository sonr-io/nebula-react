
import Tenx from "../../../assets/duotone/Tenx.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TenxIcon({ className, dataTestid = "TenxIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Tenx data-testid={dataTestid} className={classes} {...rest} />
  );
}
