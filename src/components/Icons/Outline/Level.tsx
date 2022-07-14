
import Level from "../../../assets/outline/Level.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LevelIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Level} data-testid="LevelIcon" className={classes} />
  );
}
