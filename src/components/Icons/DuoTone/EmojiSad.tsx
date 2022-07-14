
import EmojiSad from "../../../assets/duotone/EmojiSad.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiSadIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={EmojiSad} data-testid="EmojiSadIcon" className={classes} />
  );
}
