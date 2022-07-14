
import FolderConnection from "../../../assets/filled/FolderConnection.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function FolderConnectionIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={FolderConnection} data-testid="FolderConnectionIcon" className={classes} />
  );
}
