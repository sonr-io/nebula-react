
import CloseCircle from "../../../assets/filled/CloseCircle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CloseCircleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <CloseCircle data-testid="CloseCircleIcon" className={classes} />
  );
}
