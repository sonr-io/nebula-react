
import HeartCircle from "../../../assets/outline/HeartCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartCircleIcon({ className, dataTestid = "HeartCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
