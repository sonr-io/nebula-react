
import HeartTick from "../../../assets/filled/HeartTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartTickIcon({ className, dataTestid = "HeartTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
