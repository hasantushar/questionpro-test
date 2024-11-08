export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
  }

const MyButton: React.FC<MyButtonProps> = ({ label, onClick, style }) => {
    return (
        <button className="bg-blue-700 m-2 p-2 text-white" onClick={onClick} style={style}>
            {label}
        </button>
    )
}

export default MyButton