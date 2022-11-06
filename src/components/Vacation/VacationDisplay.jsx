// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VacationDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/vacation/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/vacation/${id}`)
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
                <h2>Vacation</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    A vacation is when you take a trip to some <strong>{oneMadLib.adjective}</strong> place with your <strong>{oneMadLib.adjective2}</strong> family. Usually you go to some place that 
                    is near a/an <strong>{oneMadLib.noun}</strong> or up on a/an <strong>{oneMadLib.noun2}</strong>. A good vacation place is one where you can ride <strong>{oneMadLib.pluralNoun}</strong> 
                    or play <strong>{oneMadLib.game}</strong> or go hunting for <strong>{oneMadLib.pluralNoun2}</strong>. I like to spend my time <strong>{oneMadLib.verbEnding_ING}</strong> or 
                    <strong>{oneMadLib.verbEnding_ING2}</strong>. When parents go on a vacation, they spend their time eating three <strong>{oneMadLib.pluralNoun3}</strong> a day, and fathers play 
                    golf, and mothers sit around <strong>{oneMadLib.verbEnding_ING3}</strong>. Last summer, my little brother fell in a/an <strong>{oneMadLib.noun3}</strong> and got poison 
                    <strong>{oneMadLib.plant}</strong> all over his <strong>{oneMadLib.bodyPart}</strong>. My family is going to go to [the] <strong>{oneMadLib.location}</strong>, and I will practice 
                    <strong>{oneMadLib.verbEnding_ING4}</strong>. Parents need vacations more than kids because parents are always very <strong>{oneMadLib.adjective3}</strong> and because they have 
                    to work <strong>{oneMadLib.number}</strong> hours every day all year making enough <strong>{oneMadLib.pluralNoun4}</strong> to pay for the vacation.
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/vacation/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default VacationDisplay
