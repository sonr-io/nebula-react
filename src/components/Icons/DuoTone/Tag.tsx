
import Tag from "../../../assets/duotone/Tag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TagIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Tag data-testid="TagIcon" className={classes} />
  );
}
