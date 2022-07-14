
import Tag from "../../../assets/outline/Tag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Tag} data-testid="TagIcon" className={classes} />
  );
}
