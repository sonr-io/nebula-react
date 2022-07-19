
import Group from "../../../assets/outline/Group.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GroupIcon({ className, dataTestid = "GroupIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Group data-testid={dataTestid} className={classes} {...rest} />
  );
}
