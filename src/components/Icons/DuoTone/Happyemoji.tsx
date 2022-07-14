
import Happyemoji from "../../../assets/duotone/Happyemoji.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HappyemojiIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Happyemoji} data-testid="HappyemojiIcon" className={classes} />
  );
}
