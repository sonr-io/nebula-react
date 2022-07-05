
import SaveAdd from "../../../assets/filled/SaveAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function SaveAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <SaveAdd data-testid="SaveAddIcon" className={classes} />
  );
}
