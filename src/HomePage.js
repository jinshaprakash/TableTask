import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.css'


const HomePage = ({places, query}) => {
    const [flagUrls, setFlagUrls] = useState({});
    
    useEffect(() => {
        places.forEach((place) => {
        const countryCode = place.countryCode.toLowerCase();
        const flagUrl = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        
        fetch(flagUrl)
            .then((response) => {
            if (response.ok) {
                setFlagUrls((prevUrls) => ({
                ...prevUrls,
                [countryCode]: flagUrl
                }));
            } else {
                console.error(`Error fetching flag for ${countryCode}`);
            }
            })
            .catch((error) => {
            console.error('Error fetching flag:', error);
            });
        });
    }, [places]);

    if (!query.trim()) {
        return <div className="message">Start searching</div>;
    }

    if (places.length === 0) {
        return <div className="message">No result found</div>;
    }
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place Name</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {places.map((place,index) => (
                    <tr key={place.id}>
                        <td>{index + 1}</td>
                        <td>{place.name}</td>
                        <td>
                            {place.country}{' '}
                            
                            {flagUrls[place.countryCode.toLowerCase()] && (
                                <img
                                    src={flagUrls[place.countryCode.toLowerCase()]}
                                    alt={`${place.country} flag`}
                                    width="24"
                                    height="16"
                                />
                            )}
                            {/* {place.country && (
                                <img
                                src={`https://flagsapi.com/${place.countryCode.toLowerCase()}/shiny/64.png`}
                                alt={`${place.country} flag`}
                                width="24"
                                height="16"
                                />
                            )} */}
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default HomePage
