
import EmojiSad from "../../../assets/outline/EmojiSad.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EmojiSadIcon({ className, dataTestid = "EmojiSadIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <EmojiSad data-testid={dataTestid} className={classes} {...rest} />
  );
}
