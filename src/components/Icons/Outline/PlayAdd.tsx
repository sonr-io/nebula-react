
import PlayAdd from "../../../assets/outline/PlayAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={PlayAdd} data-testid="PlayAddIcon" className={classes} />
  );
}
