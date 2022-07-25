
import PenRemove from "../../../assets/filled/PenRemove.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenRemoveIcon({ className, dataTestid = "PenRemoveIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PenRemove data-testid={dataTestid} className={classes} {...rest} />
  );
}
