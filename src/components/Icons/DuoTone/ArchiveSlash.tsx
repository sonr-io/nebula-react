
import ArchiveSlash from "../../../assets/duotone/ArchiveSlash.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArchiveSlashIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveSlash data-testid="ArchiveSlashIcon" className={classes} />
  );
}
