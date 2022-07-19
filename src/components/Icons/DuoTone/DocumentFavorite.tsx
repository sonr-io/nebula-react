
import DocumentFavorite from "../../../assets/duotone/DocumentFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DocumentFavoriteIcon({ className, dataTestid = "DocumentFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <DocumentFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
