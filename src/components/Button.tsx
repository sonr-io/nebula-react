interface props {
    text: string;
    onClick: () => void;
}

export default function Button(props: props) {
  return (
    <div className="mx-auto pt-8">
        <button 
          className="bg-primaryLight-500 hover:bg-primaryLight-700 text-white font-bold py-2 px-4 rounded" 
          onClick={props.onClick}>
            {props.text}
        </button>
    </div>
  )
}