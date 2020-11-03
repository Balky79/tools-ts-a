import React from 'react';
// import styled from 'styled-components';

const Item2 = (): JSX.Element => {
    const a = someDummyMethod();
    return <h1>Bleh {a}</h1>;
};

const someDummyMethod = (): string => {
    return 'TrlaBabaLan';
};

export default Item2;
