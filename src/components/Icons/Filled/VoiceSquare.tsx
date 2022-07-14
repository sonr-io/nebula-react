
import VoiceSquare from "../../../assets/filled/VoiceSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VoiceSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <VoiceSquare data-testid="VoiceSquareIcon" className={classes} />
  );
}
