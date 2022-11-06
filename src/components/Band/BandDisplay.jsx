// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Header from '../Header';

const BandDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/band/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/band/${id}`)
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
            <Header />
            <Link to={`/band`} className="link-btn">Back</Link>
            <hr /> <br />
            <div className="content">
                <h2>Family Rock Band</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    I don't come from your average <strong>{oneMadLib.adjective}</strong> family. That's because we're all part of the <strong>{oneMadLib.name}</strong> Family rock band and 
                    we lead a very <strong>{oneMadLib.adjective2}</strong> life. For example, by not shaving his <strong>{oneMadLib.noun}</strong> every morning, my dad saves enough time 
                    to practice the <strong>{oneMadLib.adjective3}</strong> drums. My brother doesn't participate in extracurricular <strong>{oneMadLib.pluralNoun}</strong> at school because 
                    he plays the electric <strong>{oneMadLib.noun2}</strong>. My <strong>{oneMadLib.adjective4}</strong> sister doesn't have time to date <strong>{oneMadLib.pluralNoun2}</strong> 
                    because she sings lead vocals and practices for 4 to 5 hours every <strong>{oneMadLib.noun3}</strong>. When I'm not writing our <strong>{oneMadLib.adjective5}</strong> songs, 
                    I'm tickling the <strong>{oneMadLib.pluralNoun3}</strong> on the keyboard, so I don't have any free time either. Finally, Mom is our <strong>{oneMadLib.adjective6}</strong> 
                    manager. She books our band to play at weddings, <strong>{oneMadLib.adjective7}</strong> sixteens, and <strong>{oneMadLib.noun4}</strong> mitzvahs. Maybe someday, if we 
                    practice <strong>{oneMadLib.adverb}</strong> enough, we'll get to make a music video for <strong>{oneMadLib.letter}</strong>-TV and play sold-out shows at Madison Square 
                    <strong>{oneMadLib.noun5}</strong>!
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/band/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BandDisplay;