
import Python from "../../../assets/filled/Python.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function PythonIcon({ className, dataTestid = "PythonIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Python data-testid={dataTestid} className={classes} {...rest} />
  );
}
