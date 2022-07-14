
import TagUser from "../../../assets/outline/TagUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagUserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <TagUser data-testid="TagUserIcon" className={classes} />
  );
}
