
import Export from "../../../assets/filled/Export.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ExportIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Export} data-testid="ExportIcon" className={classes} />
  );
}
