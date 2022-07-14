
import Computing from "../../../assets/outline/Computing.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ComputingIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Computing data-testid="ComputingIcon" className={classes} />
  );
}
