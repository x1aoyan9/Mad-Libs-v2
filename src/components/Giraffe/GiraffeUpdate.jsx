import React from 'react'

const GiraffeUpdate = (props) => {

    const {id} = useParams();

    const [yourName, setYourName] = useState("");
    const [pluralNoun, setPluralNoun] = useState("");
    const [pluralNoun2, setPluralNoun2] = useState("");
    const [bodyPart, setBodyPart] = useState("");
    const [number, setNumber] = useState("");
    const [pluralNoun3, setPluralNoun3] = useState("");
    const [bodyPart2, setBodyPart2] = useState("");
    const [liquid, setLiquid] = useState("");
    const [bodyParts, setBodyParts] = useState("");
    const [bodyPart3, setBodyPart3] = useState("");
    const [adjective, setAdjective] = useState("");
    const [pluralNoun4, setPluralNoun4] = useState("");
    const [adjective2, setAdjective2] = useState("");
    const [adjective3, setAdjective3] = useState("");
    const [verbEnding_ING, setVerbEnding_ING] = useState("");
    const [noun, setNoun] = useState("");
    const [pluralNoun5, setPluralNoun5] = useState("");
    const [noun2, setNoun2] = useState("");

    const navigate = useNavigate();
    const [writer, setWriter] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/giraffe/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);

            setYourName(res.data.yourName);
            setPluralNoun(res.data.pluralNoun);
            setPluralNoun2(res.data.pluralNoun2);
            setBodyPart(res.data.bodyPart);
            setNumber(res.data.number);
            setPluralNoun3(res.data.pluralNoun3);
            setBodyPart2(res.data.bodyPart2);
            setLiquid(res.data.liquid);
            setBodyParts(res.data.bodyParts);
            setBodyPart3(res.data.bodyPart3);
            setAdjective(res.data.adjective);
            setPluralNoun4(res.data.pluralNoun4);
            setAdjective2(res.data.adjective2);
            setAdjective3(res.data.adjective3);
            setVerbEnding_ING(res.data.verbEnding_ING);
            setNoun(res.data.noun);
            setPluralNoun5(res.data.pluralNoun5);
            setNoun2(res.data.noun2);
            setWriter(res.data.yourName);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/api/giraffe/${id}`, {
            yourName,
            pluralNoun,
            pluralNoun2,
            bodyPart,
            number,
            pluralNoun3,
            bodyPart2,
            liquid,
            bodyParts,
            bodyPart3,
            adjective,
            pluralNoun4,
            adjective2,
            adjective3,
            verbEnding_ING,
            noun,
            pluralNoun5,
            noun2,
            writer,
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return (
        <div className="container">
            <hr /> <br />
            <div className="form">
                <h2>Edit</h2>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label>Your Name: </label>
                        <input type="text" name="yourName" value={yourName} onChange={(e) => setYourName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun" value={pluralNoun} onChange={(e) => setPluralNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun2" value={pluralNoun2} onChange={(e) => setPluralNoun2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart" value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Number: </label>
                        <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun3" value={pluralNoun3} onChange={(e) => setPluralNoun3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart2" value={bodyPart2} onChange={(e) => setBodyPart2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Random Liquid: </label>
                        <input type="text" name="liquid" value={liquid} onChange={(e) => setLiquid(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Parts of the Body: </label>
                        <input type="text" name="bodyParts" value={bodyParts} onChange={(e) => setBodyParts(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Part of the Body: </label>
                        <input type="text" name="bodyPart3" value={bodyPart3} onChange={(e) => setBodyPart3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective" value={adjective} onChange={(e) => setAdjective(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun4" value={pluralNoun4} onChange={(e) => setPluralNoun4(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective2" value={adjective2} onChange={(e) => setAdjective2(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Adjective: </label>
                        <input type="text" name="adjective3" value={adjective3} onChange={(e) => setAdjective3(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Verb Ending in "-ING": </label>
                        <input type="text" name="verbEnding_ING" value={verbEnding_ING} onChange={(e) => setVerbEnding_ING(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun" value={noun} onChange={(e) => setNoun(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Plural Noun: </label>
                        <input type="text" name="pluralNoun5" value={pluralNoun5} onChange={(e) => setPluralNoun5(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Noun: </label>
                        <input type="text" name="noun2" value={noun2} onChange={(e) => setNoun2(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value="Update Story" />
                </form>
            </div>
        </div>
    )
}

export default GiraffeUpdate
