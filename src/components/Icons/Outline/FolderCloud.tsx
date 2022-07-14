
import FolderCloud from "../../../assets/outline/FolderCloud.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderCloudIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderCloud data-testid="FolderCloudIcon" className={classes} />
  );
}
