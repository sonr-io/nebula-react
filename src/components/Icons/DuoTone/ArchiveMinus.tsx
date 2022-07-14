
import ArchiveMinus from "../../../assets/duotone/ArchiveMinus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveMinusIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ArchiveMinus} data-testid="ArchiveMinusIcon" className={classes} />
  );
}
