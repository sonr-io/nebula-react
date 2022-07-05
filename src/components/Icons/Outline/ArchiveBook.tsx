
import ArchiveBook from "../../../assets/outline/ArchiveBook.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ArchiveBookIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ArchiveBook data-testid="ArchiveBookIcon" className={classes} />
  );
}
