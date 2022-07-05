
import PlayCricle from "../../../assets/filled/PlayCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function PlayCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayCricle data-testid="PlayCricleIcon" className={classes} />
  );
}
