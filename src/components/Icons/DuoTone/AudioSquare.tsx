
import AudioSquare from "../../../assets/duotone/AudioSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function AudioSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={AudioSquare} data-testid="AudioSquareIcon" className={classes} />
  );
}
