
import TagCross from "../../../assets/outline/TagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TagCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TagCross data-testid="TagCrossIcon" className={classes} />
  );
}
