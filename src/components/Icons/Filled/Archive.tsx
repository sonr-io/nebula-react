
import Archive from "../../../assets/filled/Archive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArchiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Archive data-testid="ArchiveIcon" className={classes} />
  );
}
