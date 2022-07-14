
import Archive from "../../../assets/filled/Archive.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ArchiveIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Archive} data-testid="ArchiveIcon" className={classes} />
  );
}
