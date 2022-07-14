
import MusicSquareSearch from "../../../assets/duotone/MusicSquareSearch.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MusicSquareSearchIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={MusicSquareSearch} data-testid="MusicSquareSearchIcon" className={classes} />
  );
}
