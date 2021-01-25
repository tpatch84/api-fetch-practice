import React from 'react';

export default function EternalCard({card}) {
            
    return (
        <>
        <div>Name: {card.Name}</div>
        <div>Set Number: {card.SetNumber}</div>
        <div>Eternal ID: {card.EternalId}</div>
        <div>Card Text: {card.CardText}</div>
        <div>Cost: {card.Cost}</div>
        <div>Influence: {card.Influence}</div>
        <div>Attack: {card.Attack}</div>
        <div>Health: {card.Health}</div>
        <div>Rarity: {card.Rarity}</div>
        <div>Type: {card.Type}</div>
        <div>Image URL: {card.ImageUrl}</div>
        <img src={card.ImageUrl} />
        <div>Details URL: {card.DetailsUrl}</div>
        <div>Deck Buildable: {card.DeckBuildable}</div>
        </>
    );
}