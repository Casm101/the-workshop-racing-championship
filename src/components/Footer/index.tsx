/* eslint-disable @next/next/no-img-element */

// Style imports
import './styles.scss';


// Footer props
interface FooterProps {

}

// Footer component declaration
export const Footer = ({ }: FooterProps) => {

    return (
        <footer className="footer-styled">
            <div className="footer-content">
                <div className="link-list">
                    <a href="">Driver Standings</a>
                    <a href="">Constructor Standings</a>
                </div>
            </div>
        </footer>
    );
};