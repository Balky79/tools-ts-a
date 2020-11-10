import React from 'react';
// import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Wheel = (): JSX.Element => {
    const query = useQuery();
    console.log('Q:');
    // <User name={query.get('')} />;
    console.log(query.get('names'));
    console.log('');
    return (
        <div>
            <h1>
                Wheel Be Here Soon {query.get('names')}
                {arrayOfNames(query.get('names'))}
            </h1>
            <canvas id="spinner"></canvas>
        </div>
    );
};

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const arrayOfNames = (names: string | null): string[] | undefined => {
    const a = names?.split(',');
    return a;
};

// const User = (props: { name: string | null }) => {
//     const { name } = props;
//     console.log(name);
//     return <div>{name}</div>;
// };

export default Wheel;

// Canvas might end up being it's own component, but will see'
//
// var canvas = document.getElementById("wheel");
// var ctx = canvas.getContext("2d");
// var end = 0;
// var color = ['#F0F8FF','#FAEBD7','#00FFFF','#7FFFD4','#00FF00','#FF8C00'];
// var labels = ['label1', 'label2','label3','label4','label5','label6'];
// var slices = ;
//
// for (var i = 0; i < slices; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = color[i];
//     ctx.moveTo(canvas.width/2,canvas.height/2);
//     ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,end, ((1/slices)*Math.PI*2)+end ,false);
//     ctx.lineTo(canvas.width/2,canvas.height/2);
//     ctx.fill();
//     end += ((1/slices)*Math.PI*2);
// }
