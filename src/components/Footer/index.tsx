/* eslint-disable @next/next/no-img-element */

// Style imports
import './styles.scss';


// Footer props
interface FooterProps {
    logo: string;
}

// Footer component declaration
export const Footer = ({ logo }: FooterProps) => {

    return (
        <footer className="footer-styled">
            <div className="footer-content">
                <a href="/">
                    <img className="logo" src={logo} alt="The Workshop Racing Championship" />
                </a>
                <div className="text">
                    <p>© 2024 The Workshop Racing Championship. No rights reserved. :P</p>
                </div>
            </div>
        </footer>
    );
};