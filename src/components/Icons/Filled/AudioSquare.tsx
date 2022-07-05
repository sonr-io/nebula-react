
import AudioSquare from "../../../assets/filled/AudioSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function AudioSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <AudioSquare data-testid="AudioSquareIcon" className={classes} />
  );
}
