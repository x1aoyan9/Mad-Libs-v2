// DISPLAY [ONE]
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MagicDisplay = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [oneMadLib, setOneMadLib] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/magic/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneMadLib(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [id]);

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/magic/${id}`)
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
        <div className="container-fluid">
            <hr /> <br />
            <div className="content">
                <h2>Magic, Anyone?</h2>
                <h3>By: {oneMadLib.yourName}</h3>
                <p>
                    <strong>{oneMadLib.pluralNoun}</strong> of all ages enjoy watching <strong>{oneMadLib.adjective}</strong> magicians perform their <strong>{oneMadLib.adjective2}</strong> tricks. Every 
                    man, woman, and <strong>{oneMadLib.noun}</strong> loves to see a magician pull a/an <strong>{oneMadLib.noun2}</strong> out of a hatm saw a live <strong>{oneMadLib.noun3}</strong> in half, 
                    or make a huge <strong>{oneMadLib.noun4}</strong> disappear into <strong>{oneMadLib.adjective3}</strong> air. Audiences love when magicians perform sleight of <strong>{oneMadLib.bodyPart}</strong> 
                    withc a deck of <strong>{oneMadLib.pluralNoun2}</strong>, a/an <strong>{oneMadLib.adjective4}</strong> coin, or a silk <strong>{oneMadLib.noun5}</strong>. The greatest of all magicians was the 
                    <strong>{oneMadLib.adjective5}</strong> Harry Houdini, who was able to escape from a locked <strong>{oneMadLib.noun6}</strong> even though his <strong>{oneMadLib.bodyParts}</strong> were tied 
                    behind his <strong>{oneMadLib.bodyPart2}</strong> and his feet were wrapped in iron <strong>{oneMadLib.pluralNoun3}</strong>.
                </p>
            </div>
            <div className="actions">
                <button onClick={ () => navigate(`/magic/edit/${oneMadLib._id}`) }>
                    Edit
                </button>
                <button onClick={deleteHandler}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MagicDisplay
