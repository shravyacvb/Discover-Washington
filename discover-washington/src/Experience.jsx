import ExperienceData from './ExperienceData';

function Experience({content}){
  
    return (
        <div className="accordion">
            <div className="accordion__menu">
                <h2 className="accordion-heading">Must Experience</h2>
                { 
                    content.map((place)=> {
                        return (
                            <ExperienceData key={place.alt} place={place}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Experience;