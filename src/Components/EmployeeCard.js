import React from 'react'

const EmployeeCard = (props) => {
    const { data, index} = props;


    return(
        <div className="card">

        <h1 className="card-number">{data[index].id}/{data.length}</h1>
        
        
            <div className="card-name">
                    <h1>{data[index].name.first} {data[index].name.last}</h1>
            </div>

                <div className="card-info">


                    <p>From: {data[index].city}, {data[index].country}</p>
                    <p>Job Title: {data[index].title}</p>
                    <p>Employer: {data[index].employer}</p>
                    

                    <h3 id = 'favs'>Favorites Movies: </h3>
                    <ol id = 'movie-list'>{data[index].favoriteMovies.map(movie => <li>{movie}</li>)}</ol>
                    

                </div>

        </div>

        
    )
}

export default EmployeeCard;