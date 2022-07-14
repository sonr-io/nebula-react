
import MusicSquareAdd from "../../../assets/filled/MusicSquareAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicSquareAdd} data-testid="MusicSquareAddIcon" className={classes} />
  );
}
