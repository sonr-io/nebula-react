
import Export from "../../../assets/outline/Export.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function ExportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Export data-testid="ExportIcon" className={classes} />
  );
}
