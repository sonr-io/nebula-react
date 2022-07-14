
import PauseCircle from "../../../assets/filled/PauseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PauseCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PauseCircle data-testid="PauseCircleIcon" className={classes} />
  );
}