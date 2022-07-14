
import Graph from "../../../assets/filled/Graph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Graph} data-testid="GraphIcon" className={classes} />
  );
}
