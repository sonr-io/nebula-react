
import Record from "../../../assets/filled/Record.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function RecordIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Record} data-testid="RecordIcon" className={classes} />
  );
}
