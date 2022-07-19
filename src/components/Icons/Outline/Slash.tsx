
import Slash from "../../../assets/outline/Slash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SlashIcon({ className, dataTestid = "SlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Slash data-testid={dataTestid} className={classes} {...rest} />
  );
}
