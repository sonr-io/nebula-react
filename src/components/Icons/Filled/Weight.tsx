
import Weight from "../../../assets/filled/Weight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function WeightIcon({ className, dataTestid = "WeightIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Weight data-testid={dataTestid} className={classes} {...rest} />
  );
}
