import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, category};

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() =>{
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2> Add New Blog </h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label> Blog Body: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label> Category: </label>
                <select
                    value={category}
                    onChange={(e)=> setCategory(e.target.value)}
                >
                    <option value="Lifestyle"> Lifestyle </option>
                    <option value="Hobby"> Hobby </option>
                    <option value="Travel"> Travel </option>
                    <option value="Work"> Work </option>
                </select>
                <button> Add Blog </button>
            </form>
            
        </div>
    );
}
 
export default Create;