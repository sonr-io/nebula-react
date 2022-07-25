
import ChartSquare from "../../../assets/duotone/ChartSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ChartSquareIcon({ className, dataTestid = "ChartSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ChartSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
