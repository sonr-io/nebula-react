
import TheGraph from "../../../assets/outline/TheGraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TheGraphIcon({ className, dataTestid = "TheGraphIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <TheGraph data-testid={dataTestid} className={classes} {...rest} />
  );
}
