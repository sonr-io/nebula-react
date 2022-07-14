
import ClipboardTick from "../../../assets/filled/ClipboardTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ClipboardTick} data-testid="ClipboardTickIcon" className={classes} />
  );
}
