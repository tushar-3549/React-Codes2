import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchFilter = () => {
    const [data, setData] = useState([]);
    const [records, setRecords] = useState([]);

    const Filter = (e) => {
        setRecords(data.filter(f => f.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setData(res.data);
                setRecords(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='p-5 bg-light'>
            <div className="bg-white shadow border">
                <input type="text" placeholder='Search here ... ' onChange={Filter} className='mb-5 form-control' />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.length > 0 ? records.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                            </tr>
                        )) : <tr>
                            <td colSpan="4">No data found</td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default SearchFilter;
