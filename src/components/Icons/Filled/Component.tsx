
import Component from "../../../assets/filled/Component.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ComponentIcon({ className, dataTestid = "ComponentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Component data-testid={dataTestid} className={classes} {...rest} />
  );
}
