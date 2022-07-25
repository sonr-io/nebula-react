
import Global from "../../../assets/outline/Global.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GlobalIcon({ className, dataTestid = "GlobalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Global data-testid={dataTestid} className={classes} {...rest} />
  );
}
