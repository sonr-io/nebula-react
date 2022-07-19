
import EmojiHappy from "../../../assets/outline/EmojiHappy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiHappyIcon({ className, dataTestid = "EmojiHappyIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmojiHappy data-testid={dataTestid} className={classes} {...rest} />
  );
}
