import React, { useState } from 'react';
// import styled from 'styled-components';

type User = {
    name: string;
    surname: string;
};

const defaultUser: User = {
    name: '',
    surname: '',
};

const Namegen = (): JSX.Element => {
    const [user, setUser] = useState(defaultUser);

    const onUserChange = <P extends keyof User>(prop: P, value: User[P]) => {
        setUser({ ...user, [prop]: value });
    };
    const a = getTitle();
    const b = getBody();
    return (
        <div>
            <input
                value={user.name}
                onChange={(e) => {
                    onUserChange('name', e.target.value);
                }}
            />
            <input
                value={user.surname || ''}
                onChange={(e) => {
                    onUserChange('surname', e.target.value);
                }}
            />
            {a} {b}U Used the following entry: {user.name} {user.surname} {'\n'}
            <button
                onClick={() => {
                    permutados(user.name, user.surname);
                }}
            >
                Stisni Me
            </button>
        </div>
    );
};

const getTitle = (): JSX.Element => {
    const a: JSX.Element = <h1>Name Generator</h1>;
    return a;
};

const getBody = (): JSX.Element => {
    const a: JSX.Element = (
        <p className={'display-linebreak'}>
            {`Name generator will return all possible permutations
             of names that could be used in your systems,
            combining known and usual patterns of usernames starting with name or surname.`}
        </p>
    );
    return a;
};

const permutados = (name: string, surname: string): Array<string> => {
    console.log(name + surname + 'from permutados');
    return [name, surname];
};

export default Namegen;
