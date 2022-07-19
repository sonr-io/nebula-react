
import QuestionCircle from "../../../assets/outline/QuestionCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function QuestionCircleIcon({ className, dataTestid = "QuestionCircleIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <QuestionCircle data-testid={dataTestid} className={classes} {...rest} />
  );
}
