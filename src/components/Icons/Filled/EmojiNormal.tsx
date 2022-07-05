
import EmojiNormal from "../../../assets/filled/EmojiNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function EmojiNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <EmojiNormal data-testid="EmojiNormalIcon" className={classes} />
  );
}
