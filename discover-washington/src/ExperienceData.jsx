import {useState} from 'react';
import Wiki from './Wiki';

function ExperienceData({place}) {
    const [isEntryOpen, setIsEntryOpen] = useState(false);

    return (
        <div className="accordion__data">
            <div role="region" key={place.alt} className={`accordion__content ${isEntryOpen ? 'accordion__content--open' : ''}`}>
                <button className="accordion__title" aria-expanded={isEntryOpen ? 'true' : 'false'} aria-controls={place.alt} onClick={
                    (e) => {
                        setIsEntryOpen(!isEntryOpen);
                        
                    }
                }>{place.alt}</button>
                {isEntryOpen && 
                 <div id={place.alt} aria-hidden={isEntryOpen ? 'false' : 'true'} className="content-accordion">
                    <Wiki url={`https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${place.wikiUrl}`} />

                    <b>Experience</b> : {place.exp}
                 </div>}
            </div>
        </div>
    );
}

export default ExperienceData;