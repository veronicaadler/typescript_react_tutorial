
interface IProps { //interface IProp is used to declare the types for the props
    people: {
      name: string
      age: number
      url: string
      note?: string //optional fields are denoted with a ?
    }[] //this empty array indicates that people will be an array of objects
  }

  const List: React.FC<IProps> = ({ people }) => {

    const renderList = (): JSX.Element[] => { //defines that what will be returned
        //by this function is a JSX element
        return people.map(person => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()} 
        </ul>
    )
}

export default List