
import PlayCricle from "../../../assets/duotone/PlayCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayCricle data-testid="PlayCricleIcon" className={classes} />
  );
}