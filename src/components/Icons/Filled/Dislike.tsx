
import Dislike from "../../../assets/filled/Dislike.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function DislikeIcon({ className, dataTestid = "DislikeIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Dislike data-testid={dataTestid} className={classes} {...rest} />
  );
}
