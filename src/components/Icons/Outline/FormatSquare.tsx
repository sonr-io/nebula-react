
import FormatSquare from "../../../assets/outline/FormatSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FormatSquareIcon({ className, dataTestid = "FormatSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FormatSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
