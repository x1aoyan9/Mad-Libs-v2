// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const WonderDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/wonder/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/wonder/${id}`)
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
            <hr /> <br />
            <div className="content">
                <h2>Story of the One-Hit Wonder</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    The Mighty <strong>{oneMadLib.pluralNoun}</strong> were a one-<strong>{oneMadLib.noun}</strong> wonder, famous for their <strong>{oneMadLib.adjective}</strong> song, 
                    "In Your <strong>{oneMadLib.bodyPart}</strong>." Where is this <strong>{oneMadLib.adjective2}</strong> band today? After hitting it big, they started to have 
                    <strong>{oneMadLib.adjective3}</strong> creative differences. They went from superstardom to a/an <strong>{oneMadLib.noun2}</strong>-shattering breakup. 
                    The lead singer, known for his <strong>{oneMadLib.adjective4}</strong> personality, wanted to change the band's name to <strong>{oneMadLib.name}</strong>'s 
                    <strong>{oneMadLib.pluralNoun2}</strong>. The rest of the band <strong>{oneMadLib.advern}</strong> refused. No one could see eye to <strong>{oneMadLib.bodyPart2}</strong>, 
                    and the bassist decided to leave the <strong>{oneMadLib.adjective5}</strong> band and pursue his lifelong dream of professional only one left. 
                    <strong>{oneMadLib.noun3}</strong>-weaving. The drummer left to leach music to high school <strong>{oneMadLib.pluralNoun3}</strong>. The lead singer was the 
                    But don't feel too bad - he has now become a/an <strong>{oneMadLib.adjective6}</strong> Inernet sensation with a video of himself playing "Sweet Home, (the) 
                    <strong>{oneMadLib.location}</strong>" on the Kazoo!
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/wonder/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default WonderDisplay
