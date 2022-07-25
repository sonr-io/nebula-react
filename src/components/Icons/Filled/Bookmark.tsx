
import Bookmark from "../../../assets/filled/Bookmark.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function BookmarkIcon({ className, dataTestid = "BookmarkIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Bookmark data-testid={dataTestid} className={classes} {...rest} />
  );
}
