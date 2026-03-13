import { Link } from 'react-router-dom';

export function NavMenus() {
    return (
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start md:items-center">
            <Link to="/" className="text-black hover:text-[#3b5d91] transition-colors font-sans">Home</Link>
            <a href="/#services" className="text-black hover:text-[#3b5d91] transition-colors font-sans">Services</a>
            <a href="/#about" className="text-black hover:text-[#3b5d91] transition-colors font-sans">About Us</a>
            <a href="/#contact" className="text-black hover:text-[#3b5d91] transition-colors font-sans">Contact</a>
        </div>
    )
}