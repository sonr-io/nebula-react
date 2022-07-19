
import Graph from "../../../assets/duotone/Graph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GraphIcon({ className, dataTestid = "GraphIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Graph data-testid={dataTestid} className={classes} {...rest} />
  );
}
