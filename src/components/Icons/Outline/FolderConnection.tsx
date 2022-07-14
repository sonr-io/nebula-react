
import FolderConnection from "../../../assets/outline/FolderConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderConnectionIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderConnection data-testid="FolderConnectionIcon" className={classes} />
  );
}
