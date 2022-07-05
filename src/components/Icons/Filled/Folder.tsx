
import Folder from "../../../assets/filled/Folder.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function FolderIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Folder data-testid="FolderIcon" className={classes} />
  );
}
