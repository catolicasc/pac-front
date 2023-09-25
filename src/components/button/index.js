const Button = ({title, action}) => {

    return <a href={action} className="bg-[#7C3AED] py-3 px-20 rounded text-xl font-bold text-[#FFF]">{title}</a>
}

export default Button