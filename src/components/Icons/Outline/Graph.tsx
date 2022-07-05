
import Graph from "../../../assets/outline/Graph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function GraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Graph data-testid="GraphIcon" className={classes} />
  );
}
