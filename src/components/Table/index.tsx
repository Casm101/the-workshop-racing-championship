// Style imports
import './styles.scss';


// Table props
interface TableProps {
    header: string[];
    body: React.ReactNode;
}

// Header component declaration
export const Table = ({ header, body }: TableProps) => {

    return (
        <table className="table-styled">
            <thead>
                {header.map((title, idx) => (
                    <th key={idx}>
                        {title}
                    </th>
                ))}
            </thead>
            <tbody>
                {body}
            </tbody>
        </table>
    );
};