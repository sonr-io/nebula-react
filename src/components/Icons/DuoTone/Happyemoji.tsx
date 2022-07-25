
import Happyemoji from "../../../assets/duotone/Happyemoji.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function HappyemojiIcon({ className, dataTestid = "HappyemojiIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Happyemoji data-testid={dataTestid} className={classes} {...rest} />
  );
}
