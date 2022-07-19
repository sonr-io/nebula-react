
import Command from "../../../assets/outline/Command.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CommandIcon({ className, dataTestid = "CommandIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Command data-testid={dataTestid} className={classes} {...rest} />
  );
}
