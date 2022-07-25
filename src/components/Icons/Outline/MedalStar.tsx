
import MedalStar from "../../../assets/outline/MedalStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MedalStarIcon({ className, dataTestid = "MedalStarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MedalStar data-testid={dataTestid} className={classes} {...rest} />
  );
}
