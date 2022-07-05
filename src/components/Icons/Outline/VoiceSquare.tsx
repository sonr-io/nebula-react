
import VoiceSquare from "../../../assets/outline/VoiceSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function VoiceSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VoiceSquare data-testid="VoiceSquareIcon" className={classes} />
  );
}
