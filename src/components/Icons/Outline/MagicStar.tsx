
import MagicStar from "../../../assets/outline/MagicStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MagicStarIcon({ className, dataTestid = "MagicStarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MagicStar data-testid={dataTestid} className={classes} {...rest} />
  );
}
