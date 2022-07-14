
import DocumentForward from "../../../assets/outline/DocumentForward.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentForwardIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentForward data-testid="DocumentForwardIcon" className={classes} />
  );
}
