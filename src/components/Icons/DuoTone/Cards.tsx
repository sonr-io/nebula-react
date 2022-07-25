
import Cards from "../../../assets/duotone/Cards.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardsIcon({ className, dataTestid = "CardsIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Cards data-testid={dataTestid} className={classes} {...rest} />
  );
}
