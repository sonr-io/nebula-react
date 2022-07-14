
import Educare from "../../../assets/outline/Educare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EducareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Educare} data-testid="EducareIcon" className={classes} />
  );
}
