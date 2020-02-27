import React from 'react'
import './index.css';

import Person from './Person/index';

//interface
export interface IPeople {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;

  address: {
    city: string,
    street: string,
  };
}

function PeopleList() {
    //executes only once
    //receives a function and an array(is the condition to execute once more, as it's empty, it will execute only once)
    React.useEffect(() => {
        //console.log('useEffect');

        async function run() {
            const people = await getPeople(); 
            const group = getEspecialGroup(people);
    
            setgroupList(group);
        }
    
        run();
    }, []);

    //useState (array, function)
    const [groupList, setgroupList] = React.useState<IPeople[]>([]);    

    //getting the API
    async function getPeople() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const people = await response.json();

        return people;
    }

    //Filtering the API by names
     function getEspecialGroup(people: IPeople[]) {
        const peopleNames = ['Leanne Graham', "Clementine Bauch", 'Chelsey Dietrich', 'Kurtis Weissnat'];
        
        const group = people.filter((person) => {
            const exists = peopleNames.includes(person.name);
            return exists;
        });

        return group;
    }

    return (
      <div>
          {groupList.map((group) => {
            return <Person person={group} key={group.id}/>    
          })}
      </div>
    )
}

export default PeopleList;
