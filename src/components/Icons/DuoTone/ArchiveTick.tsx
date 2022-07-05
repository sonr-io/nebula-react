
import ArchiveTick from "../../../assets/duotone/ArchiveTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArchiveTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveTick data-testid="ArchiveTickIcon" className={classes} />
  );
}
