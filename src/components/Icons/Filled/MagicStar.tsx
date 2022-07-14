
import MagicStar from "../../../assets/filled/MagicStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MagicStarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MagicStar} data-testid="MagicStarIcon" className={classes} />
  );
}
