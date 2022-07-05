
import FolderCross from "../../../assets/duotone/FolderCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FolderCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderCross data-testid="FolderCrossIcon" className={classes} />
  );
}
