
import ArchiveTick from "../../../assets/outline/ArchiveTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveTick data-testid="ArchiveTickIcon" className={classes} />
  );
}
