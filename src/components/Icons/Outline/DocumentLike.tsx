
import DocumentLike from "../../../assets/outline/DocumentLike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function DocumentLikeIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentLike data-testid="DocumentLikeIcon" className={classes} />
  );
}
