
import MusicSquare from "../../../assets/filled/MusicSquare.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicSquare} data-testid="MusicSquareIcon" className={classes} />
  );
}
