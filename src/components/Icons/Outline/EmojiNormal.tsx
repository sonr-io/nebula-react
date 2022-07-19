
import EmojiNormal from "../../../assets/outline/EmojiNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiNormalIcon({ className, dataTestid = "EmojiNormalIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmojiNormal data-testid={dataTestid} className={classes} {...rest} />
  );
}
