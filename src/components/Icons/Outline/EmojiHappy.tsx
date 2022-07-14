
import EmojiHappy from "../../../assets/outline/EmojiHappy.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiHappyIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={EmojiHappy} data-testid="EmojiHappyIcon" className={classes} />
  );
}
