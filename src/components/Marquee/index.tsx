// Style imports
import "./styles.scss";

// Marquee props
interface MarqueeProps {
    text: string;
};


// Marquee component declaration
export const Marquee = ({ text }: MarqueeProps) => {

    return (
        <div className="marquee-container">
            <div className="styled-marquee">
                {text}
            </div>
        </div>
    );
};
