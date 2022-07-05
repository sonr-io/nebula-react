
import Teacher from "../../../assets/filled/Teacher.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export function TeacherIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Teacher data-testid="TeacherIcon" className={classes} />
  );
}
