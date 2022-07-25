
import HeartEdit from "../../../assets/outline/HeartEdit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartEditIcon({ className, dataTestid = "HeartEditIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartEdit data-testid={dataTestid} className={classes} {...rest} />
  );
}
