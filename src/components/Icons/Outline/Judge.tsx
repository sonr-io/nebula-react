
import Judge from "../../../assets/outline/Judge.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function JudgeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Judge data-testid="JudgeIcon" className={classes} />
  );
}
