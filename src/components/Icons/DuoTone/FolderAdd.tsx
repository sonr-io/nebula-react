
import FolderAdd from "../../../assets/duotone/FolderAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FolderAdd} data-testid="FolderAddIcon" className={classes} />
  );
}
