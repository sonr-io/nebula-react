
import PercentageSquare from "../../../assets/filled/PercentageSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PercentageSquareIcon({ className, dataTestid = "PercentageSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <PercentageSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
