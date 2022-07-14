
import SaveAdd from "../../../assets/duotone/SaveAdd.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function SaveAddIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={SaveAdd} data-testid="SaveAddIcon" className={classes} />
  );
}
