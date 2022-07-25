
import Star from "../../../assets/filled/Star.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StarIcon({ className, dataTestid = "StarIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Star data-testid={dataTestid} className={classes} {...rest} />
  );
}
