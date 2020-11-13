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

const Md5hahser = (): JSX.Element => {
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
    return <h1>MD5 Hasher!</h1>;
};

getTitle.displayName = 'Kita';

const getBody = (): JSX.Element => {
    const a: JSX.Element = (
        <p className={'display-linebreak'}>
            {`MD5 Hasher is a little helper tool in which your text gets converted
            into MD5 Hash. MD5 Hash is mathematical algorithm that processes variable-length message
            into fixed-length output - hash of 128 bits.`}
        </p>
    );
    return a;
};

const permutados = (name: string, surname: string): Array<string> => {
    console.log(name + surname + 'from permutados');
    return [name, surname];
};

export default Md5hahser;
