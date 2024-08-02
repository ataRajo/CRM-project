import React from 'react';
import './Static.css';

const data = [
    { year: 1988, amount: 15 },
    { year: 1989, amount: 26.9 },
    { year: 1990, amount: 20 },
    { year: 1991, amount: 18 },
    { year: 1993, amount: 22 },
    { year: 1995, amount: 27 },
    { year: 1997, amount: 35 },
    { year: 1999, amount: 61 },
    { year: 2001, amount: 61.6 },
    { year: 2003, amount: 65 },
    { year: 2005, amount: 67.7 },
    { year: 2007, amount: 82.3 },
    { year: 2009, amount: 108.4 },
    { year: 2011, amount: 100.3 },
    { year: 2013, amount: 99.4 },
    { year: 2015, amount: 76 },
    { year: 2017, amount: 63.55 },
    { year: 2019, amount: 55.03 },
    { year: 2021, amount: 42.79 },
    { year: 2022, amount: 35.31 },
    { year: 2023, amount: 40.06 },
];

const Statics = ({ precentage }) => {
    return (
        <div className="chart-container">
            <h2 className='precnt'>{precentage}</h2>
            <div className="chart">
                {data.map((item, index) => (
                    <div key={index} className="bar" style={{ height: `${item.amount}px` }}>
                        <span className="bar-label">{item.amount}</span>
                        <span className="bar-year">{item.year}</span>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statics;
