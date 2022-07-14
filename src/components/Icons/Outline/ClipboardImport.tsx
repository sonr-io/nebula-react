
import ClipboardImport from "../../../assets/outline/ClipboardImport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardImportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <ClipboardImport data-testid="ClipboardImportIcon" className={classes} />
  );
}