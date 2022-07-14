
import TheGraph from "../../../assets/filled/TheGraph.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TheGraphIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TheGraph} data-testid="TheGraphIcon" className={classes} />
  );
}
