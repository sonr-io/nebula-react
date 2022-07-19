
import Trello from "../../../assets/filled/Trello.svg";

import { IconProps } from "../../../types";

const cx = require('classnames');

export default function TrelloIcon({ className, dataTestid = "TrelloIcon", ...rest }: IconProps) {
  const classes = cx("w-4 h-4", className);

  return (
    <Trello data-testid={dataTestid} className={classes} {...rest} />
  );
}
