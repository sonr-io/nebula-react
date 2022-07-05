
import MagicStar from "../../../assets/duotone/MagicStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MagicStarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MagicStar data-testid="MagicStarIcon" className={classes} />
  );
}
