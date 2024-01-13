// Style imports
import './styles.scss';


// Table props
interface TableProps {
    header: string[];
    body: {
        name: string,
        surname: string,
        nationality: string,
        points: number
    }[];
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
                {body.map((driver, idx) => (
                    <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{driver.surname.split(' ')[0]}</td>
                        <td>{driver.nationality}</td>
                        <td>{driver.points}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};