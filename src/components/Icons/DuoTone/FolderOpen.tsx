
import FolderOpen from "../../../assets/duotone/FolderOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderOpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderOpen data-testid="FolderOpenIcon" className={classes} />
  );
}