import React, { useEffect, useState } from 'react';

export default function EternalCard({card}) {
    const [name, setName] = useState(card.Name); 
    const [cardSet, setCardSet] = useState(card.SetNumber); 
    const [eternalID, setEternalID] = useState(card.EternalID); 
    const [cardText, setCardText] = useState(card.CardText);
    const [cost, setCost] = useState(card.Cost);
    const [influence, setInfluence] = useState(card.Influence);
    const [attack, setAttack] = useState(card.Attack);
    const [health, setHealth] = useState(card.Health);
    const [rarity, setRarity] = useState(card.Rarity);
    const [type, setType] = useState(card.Type);
    const [unitType, setUnitType] = useState(card.UnitType);
    const [imageUrl, setImageUrl] = useState(card.ImageUrl);
    const [detailsUrl, setDetailsUrl] = useState(card.DetailsUrl);
    const [deckBuildable, setDeckBuildable] = useState(card.DeckBuildable);
    // const [hasStats, setHasStats] = useState(true);

    // if (card.Type=='Spell') {
    //     setHasStats(false)
    // }
    
    // //     const [ CardText, setCardText ] = useState('');
    // useEffect(() => {
    //     cardText.replace('\u003cb\u003e', `${'<span '}`).replace('\u003c/b\u003e', `${'</mark>'}`);        
        
    // }, [])
    // // CardText.replace('\u003cb\u003e', `${'<mark>'}`).replace('\u003c/b\u003e', `${'</mark>'}`);
    

    return (
        <>
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Set Number:</strong> {cardSet}</div>
        <div><strong>Eternal ID:</strong> {eternalID}</div>
        <div><strong>Card Text:</strong> {cardText}</div>
        <div><strong>Cost:</strong> {cost}</div>
        <div><strong>Influence:</strong> {influence}</div>
        <div><strong>Attack:</strong> {attack}</div>
        <div><strong>Health:</strong> {health}</div>
        {/* {hasStats && <div><strong>Attack:</strong> {attack}</div>}
        {hasStats && <div><strong>Health:</strong> {health}</div>} */}
        <div><strong>Rarity:</strong> {rarity}</div>
        <div><strong>Type:</strong> {type}</div>

        {unitType && <div><strong>Unit Type:</strong> {
            unitType.map(unitType => `${unitType} `)
        }</div>}
        
        <div><strong>Image URL:</strong> {imageUrl}</div>
        <img src={imageUrl} />
        <div><strong>Details URL:</strong> {detailsUrl}</div>
        <div><strong>Deck Buildable:</strong> {deckBuildable ? 'Yes' : 'No'}</div>
        </>
    );
}