
import EmojiNormal from "../../../assets/outline/EmojiNormal.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiNormalIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={EmojiNormal} data-testid="EmojiNormalIcon" className={classes} />
  );
}
