
import FolderOpen from "../../../assets/filled/FolderOpen.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderOpenIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <FolderOpen data-testid="FolderOpenIcon" className={classes} />
  );
}