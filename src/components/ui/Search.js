import React from 'react'
import {useState} from 'react'
const Search = ({getQuery}) => {
    const [searchTerm, setSearchTerm] = useState('')

    const onChange = (e) => {
        const q = e.target.value;
        setSearchTerm(q);
        getQuery(q);
    }
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(searchTerm)
    // }
    return (
        <section className='search'>
            <form >
                <input type='text'
                className='form-control'
                placeholder='Search Character'
                autoFocus
                onChange={onChange}
                value={searchTerm}
                />
            </form>            
        </section>
    )
}

export default Search
