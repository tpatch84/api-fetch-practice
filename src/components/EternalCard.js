import React from 'react';

export default function EternalCard({card}) {
    const {
            Name, 
            SetNumber, 
            EternalID, 
            CardText,
            Cost,
            Influence,
            Attack,
            Health,
            Rarity,
            Type,
            ImageUrl,
            DetailsUrl,
            DeckBuildable
          } = card;

    return (
        <>
        <div><strong>Name:</strong> {Name}</div>
        <div><strong>Set Number:</strong> {SetNumber}</div>
        <div><strong>Eternal ID:</strong> {EternalID}</div>
        <div><strong>Card Text:</strong> {CardText}</div>
        <div><strong>Cost:</strong> {Cost}</div>
        <div><strong>Influence:</strong> {Influence}</div>
        <div><strong>Attack:</strong> {Attack}</div>
        <div><strong>Health:</strong> {Health}</div>
        <div><strong>Rarity:</strong> {Rarity}</div>
        <div><strong>Type:</strong> {Type}</div>
        <div><strong>Image URL:</strong> {ImageUrl}</div>
        <img src={ImageUrl} />
        <div><strong>Details URL:</strong> {DetailsUrl}</div>
        <div><strong>Deck Buildable:</strong> {DeckBuildable}</div>
        </>
    );
}