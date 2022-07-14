
import Bookmark from "../../../assets/filled/Bookmark.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookmarkIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Bookmark data-testid="BookmarkIcon" className={classes} />
  );
}
