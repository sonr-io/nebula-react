
import DirectRight from "../../../assets/outline/DirectRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectRightIcon({ className, dataTestid = "DirectRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
