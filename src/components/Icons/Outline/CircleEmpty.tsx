
import CircleEmpty from "../../../assets/outline/CircleEmpty.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CircleEmptyIcon({ className, dataTestid = "CircleEmptyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CircleEmpty data-testid={dataTestid} className={classes} {...rest} />
  );
}
