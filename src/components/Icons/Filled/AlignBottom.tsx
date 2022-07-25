
import AlignBottom from "../../../assets/filled/AlignBottom.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AlignBottomIcon({ className, dataTestid = "AlignBottomIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AlignBottom data-testid={dataTestid} className={classes} {...rest} />
  );
}
