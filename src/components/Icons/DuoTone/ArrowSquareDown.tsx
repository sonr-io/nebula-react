
import ArrowSquareDown from "../../../assets/duotone/ArrowSquareDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareDownIcon({ className, dataTestid = "ArrowSquareDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSquareDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
