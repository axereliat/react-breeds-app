import React, {Fragment, useContext, useEffect, useState} from 'react'
import './App.css';
import BreedContext from "./context/breed-context";
import {Col, Form, FormGroup, Input, Label, Table} from "reactstrap";

function App() {

    const {data, setData} = useContext(BreedContext);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        setInitialData(data);
    }, [data]);

    let id = 0;

    function filterByBreed (e) {
        setInitialData(data.filter(t => t.breed.includes(e.target.value)));
    }

    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label
                        for="breed"
                        sm={1}
                    >
                        Search:
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="breed"
                            name="breed"
                            placeholder="type a breed..."
                            type="text"
                            onChange={filterByBreed}
                        />
                    </Col>
                </FormGroup>
            </Form>
            <Table
            >
                <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Breed
                    </th>
                    <th>
                        Nationality
                    </th>
                </tr>
                </thead>
                <tbody>
                {initialData && initialData.map(k => (
                    <tr key={id}>
                        <th scope="row">
                            {++id}
                        </th>
                        <td>
                            {k.breed}
                        </td>
                        <td>
                            {k.nationalities.join(', ')}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default App;
