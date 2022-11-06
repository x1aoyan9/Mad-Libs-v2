// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MovieDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            console.log(res);
            console.log("Successfully deleting Mad Lib");
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log("An error has occured when attempting to delete the Mad Lib");
            console.log(err);
        });
    };

    return (
        <div className="container">
            <br />
            <div className="content">
                <h2>Movies Should Be Fun</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    In recent years, there have been too many disaster movies in which <strong>{oneMadLib.pluralNoun}</strong> catch on fire, <strong>{oneMadLib.adjective}</strong> 
                    dinosaurs come to life, and huge <strong>{oneMadLib.pluralNoun2}</strong> attack people in the ocean making you afraid to get out of your <strong>{oneMadLib.noun}</strong> 
                    in the morning. Movie fans ask why we can't have more <strong>{oneMadLib.adjective2}</strong> pictures like It's a Wonderful <strong>{oneMadLib.noun2}</strong>, Gone 
                    with the <strong>{oneMadLib.noun3}</strong>, or <strong>{oneMadLib.name}</strong> Goes to <strong>{oneMadLib.location}</strong>. These films made you feel 
                    <strong>{oneMadLib.adjective3}</strong> all over. These same fans also ask why we can't have more funny films with comedians such as Laruel and <strong>{oneMadLib.name2}</strong>, 
                    and Abbott and <strong>{oneMadLib.name3}</strong>. These <strong>{oneMadLib.adjective4}</strong> performers gave us great slapstick <strong>{oneMadLib.pluralNoun3}</strong> 
                    that still makes our <strong>{oneMadLib.bodyParts}</strong> ache from laughing.
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/movie/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MovieDisplay
