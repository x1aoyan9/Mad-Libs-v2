// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const JudgeDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/judge/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/judge/${id}`)
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
                <h2>The Judges' Decision</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    When it was my turn to audition for <strong>{oneMadLib.noun}</strong> Idol, the reality show where people compete to be the best solo <strong>{oneMadLib.noun2}</strong>, I sang from the 
                    depths of my very <strong>{oneMadLib.bodyPart}</strong>. When my song ended, I could hardly catch my <strong>{oneMadLib.noun3}</strong> as I <strong>{oneMadLib.adverb}</strong> awaited 
                    the judges' responses. First, <strong>{oneMadLib.fName}</strong> was very kind. She said, "Well, the good news is that you look <strong>{oneMadLib.adjective}</strong>, and you really 
                    connected with the <strong>{oneMadLib.pluralNoun}</strong> in the song." Then <strong>{oneMadLib.name}</strong> said, "You know, <strong>{oneMadLib.animal}</strong>, I dug your 
                    <strong>{oneMadLib.pluralNoun2}</strong>," and I thought I really have a chance to make it to (the) <strong>{oneMadLib.location}</strong>! But then mean, old <strong>{oneMadLib.name2}</strong> 
                    said, "Horrid. Terrible. <strong>{oneMadLib.adjective2}</strong>. You sounded like an animal trapped inside a/an <strong>{oneMadLib.noun4}</strong>." I gasped and shouted, "Well, you just 
                    don't know anything about <strong>{oneMadLib.noun5}</strong>!" I stormed out of the <strong>{oneMadLib.noun6}</strong>. I was going to make it as a/an <strong>{oneMadLib.adjective3}</strong> 
                    singer whether that judge from <strong>{oneMadLib.noun}</strong> Idol liked me or not!
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/judge/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default JudgeDisplay
