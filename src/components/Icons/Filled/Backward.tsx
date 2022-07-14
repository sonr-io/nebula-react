
import Backward from "../../../assets/filled/Backward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BackwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Backward data-testid="BackwardIcon" className={classes} />
  );
}
