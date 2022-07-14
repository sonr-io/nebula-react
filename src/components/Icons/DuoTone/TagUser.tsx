
import TagUser from "../../../assets/duotone/TagUser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TagUserIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={TagUser} data-testid="TagUserIcon" className={classes} />
  );
}
