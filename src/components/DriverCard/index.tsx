// Prisma type
import { Driver, Team } from '@prisma/client';

// Util imports
import { findCountry } from '@/utils/countryCodes';

// Style imports
import './styles.scss';
import Image from 'next/image';

// DriverCard props
export interface DriverCardProps extends Driver {
  team: Team
}


// DriverCard component declaration
export const DriverCard = ({ name, surname, nationality, team }: DriverCardProps) => {

  return (
    <div className="driver-styled">
      <div className="driver-header">
        <div className="team-color" />
        <div className="driver-name">
          <p className='name'>{name}</p>
          <p className='surname'>{surname}</p>
        </div>
        <div className="spacer"></div>
        <div className="flag">
          <Image
            src={`https://flagsapi.com/${findCountry(nationality)?.alpha2}/flat/64.png`}
            alt={`${nationality} country flag`}
            width={48}
            height={48}
          />
        </div>
      </div>
      <hr />
      <div className="driver-info">
        <div className="stats">
          <p className="team">{team.name}</p>
          <p className="points">0</p>
        </div>
        <div className="portrait">
          <Image
            src='/driver-silhouette.png'
            alt='Driver image'
            width={155}
            height={155}
          />
        </div>
      </div>
    </div>
  );
};


// Force page to be serverside rendered
export const dynamic = 'force-dynamic';
