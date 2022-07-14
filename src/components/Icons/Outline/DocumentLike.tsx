
import DocumentLike from "../../../assets/outline/DocumentLike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentLikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={DocumentLike} data-testid="DocumentLikeIcon" className={classes} />
  );
}
