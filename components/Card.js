export default function Card ({ active, className = '', children }) {

    const activeClass = active ? 'border-2 border-gray-700' : 'border border-gray-300 hover:border-gray-500'

    return (
        <div className={`${className} ${activeClass} rounded-md overflow-hidden cursor-pointer focus:shadow-sm focus:outline-none`}>
            {children}
        </div>
    )
}