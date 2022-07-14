
import Sticker from "../../../assets/duotone/Sticker.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function StickerIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Sticker} data-testid="StickerIcon" className={classes} />
  );
}
