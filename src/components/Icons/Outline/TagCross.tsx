
import TagCross from "../../../assets/outline/TagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TagCross} data-testid="TagCrossIcon" className={classes} />
  );
}
