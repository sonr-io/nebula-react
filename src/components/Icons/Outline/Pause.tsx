
import Pause from "../../../assets/outline/Pause.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PauseIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Pause} data-testid="PauseIcon" className={classes} />
  );
}
