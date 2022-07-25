
import ElementPlus from "../../../assets/filled/ElementPlus.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function ElementPlusIcon({ className, dataTestid = "ElementPlusIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <ElementPlus data-testid={dataTestid} className={classes} {...rest} />
  );
}
