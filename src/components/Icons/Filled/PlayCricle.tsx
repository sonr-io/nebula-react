
import PlayCricle from "../../../assets/filled/PlayCricle.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayCricleIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PlayCricle} data-testid="PlayCricleIcon" className={classes} />
  );
}
