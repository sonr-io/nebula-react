
import NoteFavorite from "../../../assets/duotone/NoteFavorite.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function NoteFavoriteIcon({ className, dataTestid = "NoteFavoriteIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <NoteFavorite data-testid={dataTestid} className={classes} {...rest} />
  );
}
