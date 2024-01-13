/* eslint-disable @next/next/no-img-element */

// Style imports
import './styles.scss';


// Header props
interface HeaderProps {
    logo: string;
    notification?: string;
}

// Header component declaration
export const Header = ({ logo, notification }: HeaderProps) => {

    return (
        <header className="header-styled">
            {notification &&
                <div className="scrolling-notification">
                    {notification}
                </div>
            }
            <div className="header-content">
                <img className="logo" src={logo} alt="The Workshop Racing Championship" />

                <div className="link-list">
                    <a href="">Driver Standings</a>
                    <a href="">Constructor Standings</a>
                </div>
            </div>
        </header>
    );
};