
import Educare from "../../../assets/outline/Educare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EducareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Educare data-testid="EducareIcon" className={classes} />
  );
}
