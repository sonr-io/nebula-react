
import LikeTag from "../../../assets/filled/LikeTag.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function LikeTagIcon({ className, dataTestid = "LikeTagIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <LikeTag data-testid={dataTestid} className={classes} {...rest} />
  );
}
