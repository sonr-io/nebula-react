
import DocumentPrevious from "../../../assets/outline/DocumentPrevious.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentPreviousIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentPrevious} data-testid="DocumentPreviousIcon" className={classes} />
  );
}
