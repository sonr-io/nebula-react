interface props {
    label: string;
    styling: string;
    onClick: () => void;
}

export default function Button(props: props) {
  return (
    <div className="mx-auto pt-8">
        <button 
          className={props.styling}
          onClick={props.onClick}>
            {props.label}
        </button>
    </div>
  )
}