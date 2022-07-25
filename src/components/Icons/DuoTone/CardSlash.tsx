
import CardSlash from "../../../assets/duotone/CardSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardSlashIcon({ className, dataTestid = "CardSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <CardSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
