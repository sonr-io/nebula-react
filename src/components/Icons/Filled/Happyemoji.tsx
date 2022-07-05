
import Happyemoji from "../../../assets/filled/Happyemoji.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function HappyemojiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Happyemoji data-testid="HappyemojiIcon" className={classes} />
  );
}
