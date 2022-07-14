
import Python from "../../../assets/filled/Python.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PythonIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <Python data-testid="PythonIcon" className={classes} />
  );
}
