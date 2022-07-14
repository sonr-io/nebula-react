
import ArchiveSlash from "../../../assets/outline/ArchiveSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArchiveSlash} data-testid="ArchiveSlashIcon" className={classes} />
  );
}
