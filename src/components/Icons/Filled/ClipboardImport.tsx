
import ClipboardImport from "../../../assets/filled/ClipboardImport.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ClipboardImportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={ClipboardImport} data-testid="ClipboardImportIcon" className={classes} />
  );
}
