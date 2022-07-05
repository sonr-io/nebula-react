
import MusicSquareSearch from "../../../assets/filled/MusicSquareSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function MusicSquareSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <MusicSquareSearch data-testid="MusicSquareSearchIcon" className={classes} />
  );
}
