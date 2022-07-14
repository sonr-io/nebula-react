
import Paintbucket from "../../../assets/outline/Paintbucket.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PaintbucketIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Paintbucket data-testid="PaintbucketIcon" className={classes} />
  );
}