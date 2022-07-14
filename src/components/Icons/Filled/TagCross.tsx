
import TagCross from "../../../assets/filled/TagCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TagCross data-testid="TagCrossIcon" className={classes} />
  );
}
