
import Edit from "../../../assets/filled/Edit.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function EditIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Edit data-testid="EditIcon" className={classes} />
  );
}