import React from 'react';
// import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wheel = (): JSX.Element => {
    const query = useQuery();
    console.log('Q:');
    <User name={query.get('')} />;
    console.log(query.get('names'));
    console.log('');
    return <h1>Wheel Be Here Soon {query.get('names')}</h1>;
};

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const User = (props: { name: string | null }) => {
    const { name } = props;
    console.log(name);
    return <div>{name}</div>;
};

export default Wheel;
