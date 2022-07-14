
import Folder from "../../../assets/outline/Folder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Folder} data-testid="FolderIcon" className={classes} />
  );
}
