
import ArchiveMinus from "../../../assets/filled/ArchiveMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveMinus data-testid="ArchiveMinusIcon" className={classes} />
  );
}
