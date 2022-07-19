
import Sticker from "../../../assets/duotone/Sticker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickerIcon({ className, dataTestid = "StickerIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Sticker data-testid={dataTestid} className={classes} {...rest} />
  );
}
