
import DocumentFavorite from "../../../assets/outline/DocumentFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentFavoriteIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <DocumentFavorite data-testid="DocumentFavoriteIcon" className={classes} />
  );
}
