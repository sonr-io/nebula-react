
import BoxTick from "../../../assets/outline/BoxTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxTickIcon({ className, dataTestid = "BoxTickIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BoxTick data-testid={dataTestid} className={classes} {...rest} />
  );
}
