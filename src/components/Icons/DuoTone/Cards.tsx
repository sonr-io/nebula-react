
import Cards from "../../../assets/duotone/Cards.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function CardsIcon(props: IconProps) {
  const classes = cx("w-4 h-4", props.className);

  return (
    <img src={Cards} data-testid="CardsIcon" className={classes} />
  );
}
