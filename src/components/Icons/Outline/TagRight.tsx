
import TagRight from "../../../assets/outline/TagRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TagRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TagRight data-testid="TagRightIcon" className={classes} />
  );
}
