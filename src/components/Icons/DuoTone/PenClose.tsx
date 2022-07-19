
import PenClose from "../../../assets/duotone/PenClose.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PenCloseIcon({ className, dataTestid = "PenCloseIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PenClose data-testid={dataTestid} className={classes} {...rest} />
  );
}
