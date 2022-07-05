
import TheGraph from "../../../assets/outline/TheGraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TheGraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TheGraph data-testid="TheGraphIcon" className={classes} />
  );
}
