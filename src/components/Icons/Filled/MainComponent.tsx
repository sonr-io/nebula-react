
import MainComponent from "../../../assets/filled/MainComponent.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function MainComponentIcon({ className, dataTestid = "MainComponentIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <MainComponent data-testid={dataTestid} className={classes} {...rest} />
  );
}
