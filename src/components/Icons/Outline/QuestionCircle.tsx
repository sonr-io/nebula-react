
import QuestionCircle from "../../../assets/outline/QuestionCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuestionCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <QuestionCircle data-testid="QuestionCircleIcon" className={classes} />
  );
}
