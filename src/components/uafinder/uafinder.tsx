import React from 'react';
// import styled from 'styled-components';

const UaFinder = (): JSX.Element => {
    const a = getTitle();
    const b = getBody();
    return (
        <div>
            {a}
            {b}
            <GetUA></GetUA>
        </div>
    );
};
export const GetUA = (): JSX.Element => {
    return <h2>{window.navigator.userAgent}</h2>;
};

const getTitle = (): JSX.Element => {
    return <h1>User Agent Finder</h1>;
};

getTitle.displayName = 'Kita';

const getBody = (): JSX.Element => {
    const a: JSX.Element = (
        <p className={'display-linebreak'}>
            {`UA - User Agent, or User-Agent is a software agent acting on behalf of a user. 
            It is most commonly used in web browsers but as well in other type of softwares that
            render and facilitate end user interaction with web content. 
            
            Note - there are many extensions, software, and ways to change or fake user agents.
            If you use any of those, you'll see them here - so you can test UA changer extensions
            and similar. 
            
            Your User-Agent used in the current request:`}
        </p>
    );
    return a;
};

export default UaFinder;
