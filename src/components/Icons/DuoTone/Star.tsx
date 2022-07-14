
import Star from "../../../assets/duotone/Star.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Star data-testid="StarIcon" className={classes} />
  );
}
