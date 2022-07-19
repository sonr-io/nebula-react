
import ArrowSquareRight from "../../../assets/duotone/ArrowSquareRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArrowSquareRightIcon({ className, dataTestid = "ArrowSquareRightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ArrowSquareRight data-testid={dataTestid} className={classes} {...rest} />
  );
}
