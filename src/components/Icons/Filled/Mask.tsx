
import Mask from "../../../assets/filled/Mask.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MaskIcon({ className, dataTestid = "MaskIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Mask data-testid={dataTestid} className={classes} {...rest} />
  );
}
