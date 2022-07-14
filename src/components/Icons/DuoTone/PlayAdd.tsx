
import PlayAdd from "../../../assets/duotone/PlayAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PlayAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <PlayAdd data-testid="PlayAddIcon" className={classes} />
  );
}
