
import Danger from "../../../assets/outline/Danger.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DangerIcon({ className, dataTestid = "DangerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Danger data-testid={dataTestid} className={classes} {...rest} />
  );
}
