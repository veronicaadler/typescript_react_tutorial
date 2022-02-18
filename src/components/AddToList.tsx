import {useState} from 'react';
import { IState as Props } from '../App';

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}


const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [ input, setInput ] = useState({
        name: '',
        age: '',
        url: '',
        note: ''
    })

    //here, we are specifying the type for the event so that TS knows what to expect.
    //these can be accessed by starting to define the function inline, and hovering over it.
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    //use return void when you don't want to return anything
    const handleClick = (): void => {
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />
            <input
                type="text"
                placeholder="Image URL"
                className="AddToList-input"
                value={input.url}
                onChange={handleChange}
                name="url"
            />
            <textarea
                placeholder="Notes"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note"
            />
            <button
                className="AddToList-btn"
                onClick={handleClick}
            >
                Add To List
            </button>
        </div>
    )
}

export default AddToList;