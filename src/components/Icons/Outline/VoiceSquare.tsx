
import VoiceSquare from "../../../assets/outline/VoiceSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function VoiceSquareIcon({ className, dataTestid = "VoiceSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <VoiceSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
