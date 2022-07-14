
import MedalStar from "../../../assets/outline/MedalStar.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MedalStarIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MedalStar} data-testid="MedalStarIcon" className={classes} />
  );
}
