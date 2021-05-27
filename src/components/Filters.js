import React from "react";
import '../styles/app.css';

function Filters(props) {

    function handleFilterCategory(filter) {
        if (filter === 'all'){
            props.setFilterCategory([]);
            return;
        }

        
    }

    return (
        <div className="movie-filter">
                <button className={`filter ${props.filterCategory.length === 0 ? 'filter-active' : ''}`} onClick={() => handleFilterCategory('all')} >Todos</button>
                <button className={`filter ${props.filterCategory.includes('action') ? 'filter-active' : ''}`} onClick={() => handleFilterCategory('action')}>Ação</button>
                <button className={`filter ${props.filterCategory.includes('romance') ? 'filter-active' : ''}`} onClick={() => handleFilterCategory('romance')}>Romance</button>
                <button className={`filter ${props.filterCategory.includes('science fiction') ? 'filter-active' : ''}`} onClick={() => handleFilterCategory('science fiction')}>Ficção Científica</button>
                <button className={`filter ${props.filterCategory.includes('horror') ? 'filter-active' : ''}`} onClick={() => handleFilterCategory('horror')}>Terror</button>
        </div>
    )
}

export default Filters;