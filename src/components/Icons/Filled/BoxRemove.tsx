
import BoxRemove from "../../../assets/filled/BoxRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BoxRemoveIcon({ className, dataTestid = "BoxRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <BoxRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
