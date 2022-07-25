
import Group1 from "../../../assets/outline/Group1.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function Group1Icon({ className, dataTestid = "Group1Icon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Group1 data-testid={dataTestid} className={classes} {...rest} />
  );
}
