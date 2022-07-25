
import DirectDown from "../../../assets/outline/DirectDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DirectDownIcon({ className, dataTestid = "DirectDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DirectDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
