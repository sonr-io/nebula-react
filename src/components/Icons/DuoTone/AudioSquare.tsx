
import AudioSquare from "../../../assets/duotone/AudioSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AudioSquareIcon({ className, dataTestid = "AudioSquareIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <AudioSquare data-testid={dataTestid} className={classes} {...rest} />
  );
}
