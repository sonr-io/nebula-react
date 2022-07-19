
import GridEraser from "../../../assets/filled/GridEraser.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function GridEraserIcon({ className, dataTestid = "GridEraserIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <GridEraser data-testid={dataTestid} className={classes} {...rest} />
  );
}
