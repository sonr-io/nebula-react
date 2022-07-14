
import ArchiveTick from "../../../assets/filled/ArchiveTick.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveTickIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArchiveTick} data-testid="ArchiveTickIcon" className={classes} />
  );
}
