
import Sticker from "../../../assets/outline/Sticker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Sticker data-testid="StickerIcon" className={classes} />
  );
}
