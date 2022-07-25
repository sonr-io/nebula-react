
import HeartRemove from "../../../assets/filled/HeartRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HeartRemoveIcon({ className, dataTestid = "HeartRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <HeartRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
