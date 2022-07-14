
import FolderCross from "../../../assets/outline/FolderCross.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderCrossIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FolderCross} data-testid="FolderCrossIcon" className={classes} />
  );
}
