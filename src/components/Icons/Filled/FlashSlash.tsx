
import FlashSlash from "../../../assets/filled/FlashSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FlashSlashIcon({ className, dataTestid = "FlashSlashIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <FlashSlash data-testid={dataTestid} className={classes} {...rest} />
  );
}
