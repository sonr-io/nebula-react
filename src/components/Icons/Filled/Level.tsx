
import Level from "../../../assets/filled/Level.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LevelIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Level data-testid="LevelIcon" className={classes} />
  );
}
