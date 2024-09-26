import React from "react";

function DisplayMadLibs(data) {

    return (
        <div>
        <h2> {data.noun1}: the {data.adj1} frontier. 
        These are the voyages of the starship {data.noun2}. 
        Its {data.number}-year mission: to explore strange {data.adj2} {data.pluralNoun1}, 
        to seek out {data.adj2} {data.pluralNoun2} 
        and {data.adj2} {data.pluralNoun3}, to boldly {data.verbPresTense} 
        where no one has {data.sameVerbPastTense} before.</h2>
        </div>
    )
}

export default DisplayMadLibs