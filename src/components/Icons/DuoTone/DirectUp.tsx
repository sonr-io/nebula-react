
import DirectUp from "../../../assets/duotone/DirectUp.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectUpIcon({ className, dataTestid = "DirectUpIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectUp data-testid={dataTestid} className={classes} {...rest} />
  );
}
