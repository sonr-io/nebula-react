
import ArchiveAdd from "../../../assets/outline/ArchiveAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArchiveAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveAdd data-testid="ArchiveAddIcon" className={classes} />
  );
}
