
import ClipboardExport from "../../../assets/duotone/ClipboardExport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardExportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardExport data-testid="ClipboardExportIcon" className={classes} />
  );
}
