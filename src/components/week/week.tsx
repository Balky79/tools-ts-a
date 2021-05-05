import React from 'react';
// import styled from 'styled-components';

const Week = (): JSX.Element => {
    const a = getTitle();
    const b = getBody();
    return (
        <div>
            {a}
            {b}
            <GetWeek></GetWeek>
        </div>
    );
};

const getTitle = (): JSX.Element => {
    return <h1>Week Title</h1>;
};

getTitle.displayName = 'Kita';

const getBody = (): JSX.Element => {
    const a: JSX.Element = (
        <p className={'display-linebreak'}>
            {`Well, for some reason, most of the callendars hide
            week numbers by default and it's often pain to figure it out.
            So, this little helper here....`}
        </p>
    );
    return a;
};

export const GetWeek = (): JSX.Element => {
    return <h2>{window.navigator.userAgent}</h2>;
};

export default Week;
