
import TrendDown from "../../../assets/filled/TrendDown.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrendDownIcon({ className, dataTestid = "TrendDownIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TrendDown data-testid={dataTestid} className={classes} {...rest} />
  );
}
