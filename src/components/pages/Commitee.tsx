// import React, { useState } from 'react';

// const Committee: React.FC = () => {
//     const [selectedYear, setSelectedYear] = useState<string>('2023');

//     const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedYear(event.target.value);
//     };

//     const members = {
//         '2023': [
//             { name: 'Member 1', position: 'Position 1' },
//             { name: 'Member 2', position: 'Position 2' },
//             { name: 'Member 3', position: 'Position 3' },
//         ],
//         '2022': [
//             { name: 'Member A', position: 'Position A' },
//             { name: 'Member B', position: 'Position B' },
//             { name: 'Member C', position: 'Position C' },
//         ],
//         // Add more years and members as needed
//     };

//     return (
//         <div>
//             <h1>Committee Page</h1>
//             <p>Welcome to the Committee page. Here you can find information about our committee members.</p>
//             <h2>Our Vision</h2>
//             <p>Our vision is to foster a collaborative environment for innovation and excellence.</p>
//             <label htmlFor="year-select">Select Year: </label>
//             <select id="year-select" value={selectedYear} onChange={handleYearChange}>
//                 {Object.keys(members).map(year => (
//                     <option key={year} value={year}>{year}</option>
//                 ))}
//             </select>
//             <ul>
//                 {members[selectedYear].map((member, index) => (
//                     <li key={index}>{member.name}: {member.position}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Committee;