
import Happyemoji from "../../../assets/outline/Happyemoji.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HappyemojiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Happyemoji data-testid="HappyemojiIcon" className={classes} />
  );
}
