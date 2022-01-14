// import { useState } from 'react';
// import DateRangePicker from '@wojtekmaj/react-daterange-picker/dist/entry.nostyle'

// // import './Sample.less';

// const now = new Date();
// const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
// const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)


// export default function DatePicker() {
//     const [value, onChange] = useState([yesterdayBegin, todayEnd]);
//     console.log('this is the', yesterdayBegin)
//     console.log('this is the', todayEnd)

//     return (
//         <div>
//             <h1>select your booking</h1>
//             <DateRangePicker
//                 onChange={onChange}
//                 value={value}
//             />
//         </div>
//     )
// }
