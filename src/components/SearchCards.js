import React, {Component} from 'react';

export default function SearchCards() {
    return (
        <>
        <input 
          id="SearchCards"
          type="text"
          aria-label="Search Cards"
          onChange={e=> this.props.searchCards(e.target.value)}
        />
        <button 
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expandable="false"
        >
            Filter by: 
        </button>

        <div>
            <button 
              onClick={e => this.props.filterBy('Name')}
              href="#"
            >
              Card Name
            </button>
            <button 
              onClick={e => this.props.filterBy('SetNumber')}
              href="#"
            >
              Set Number
            </button>
            <button 
              onClick={e => this.props.filterBy('EternalID')}
              href="#"
            >
              Eternal ID
            </button>
            <button 
              onClick={e => this.props.filterBy('CardText')}
              href="#"
            >
              Card Text
            </button>
            <button 
              onClick={e => this.props.filterBy('Cost')}
              href="#"
            >
              Power Cost
            </button>
            <button 
              onClick={e => this.props.filterBy('Influence')}
              href="#"
            >
              Influence Cost
            </button>
            <button 
              onClick={e => this.props.filterBy('Attack')}
              href="#"
            >
              Attack Value
            </button>
            <button 
              onClick={e => this.props.filterBy('Health')}
              href="#"
            >
              Health Value
            </button>
            <button 
              onClick={e => this.props.filterBy('Rarity')}
              href="#"
            >
              Rarity
            </button>
            <button 
              onClick={e => this.props.filterBy('Type')}
              href="#"
            >
              Card Type
            </button>
            <button 
              onClick={e => this.props.filterBy('UnitType')}
              href="#"
            >
              Unit Type
            </button>
            
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>
    );
}