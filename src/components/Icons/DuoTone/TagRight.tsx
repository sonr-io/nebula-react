
import TagRight from "../../../assets/duotone/TagRight.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagRightIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TagRight} data-testid="TagRightIcon" className={classes} />
  );
}
