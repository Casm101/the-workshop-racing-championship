/* eslint-disable @next/next/no-img-element */

// Style imports
import { Marquee } from '..';
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
                <Marquee text={notification} />
            }
            <div className="header-content">
                <img className="logo" src={logo} alt="The Workshop Racing Championship" />

                <div className="link-list">
                    <a href="/driver-standings">Driver Standings</a>
                    <a href="/constructor-standings">Constructor Standings</a>
                    <a href="/point-system">Point System</a>
                </div>
            </div>
        </header>
    );
};