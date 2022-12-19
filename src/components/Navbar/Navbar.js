import './Navbar.sass'
import CustomizedBadges from "../CartWidget/CartWidget.js";

export const Navbar = ({}) => {

    return (
        <header className='.navBarRam'>
            <h1 className='navBarRam__Logo'>LOGO</h1>

            <nav>
                <a href="#">What</a>
                <a href="#">We</a>
                <a href="#">Do</a>
                <span>|</span>
                <a href="#">IdeaLab</a>
                <span>|</span>
                <CustomizedBadges/>
            </nav>
        </header>
    )
}