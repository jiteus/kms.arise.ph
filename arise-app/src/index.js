import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SDGCard from './SDGCard';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { sdgoals } from './sdg';

ReactDOM.render(
                <div>
                <SDGCard id={sdgoals[0].id} name={sdgoals[0].name} desc={sdgoals[0].desc} tracker={sdgoals[0].tracker} logo={sdgoals[0].logo} />
                <SDGCard id={sdgoals[1].id} name={sdgoals[1].name} desc={sdgoals[1].desc} tracker={sdgoals[1].tracker} logo={sdgoals[2].logo} /> 
                <SDGCard id={sdgoals[2].id} name={sdgoals[2].name} desc={sdgoals[2].desc} tracker={sdgoals[2].tracker} logo={sdgoals[3].logo} />
                <SDGCard id={sdgoals[3].id} name={sdgoals[3].name} desc={sdgoals[3].desc} tracker={sdgoals[3].tracker} logo={sdgoals[4].logo} />
                <SDGCard id={sdgoals[4].id} name={sdgoals[4].name} desc={sdgoals[4].desc} tracker={sdgoals[4].tracker} logo={sdgoals[5].logo} /> 
                <SDGCard id={sdgoals[5].id} name={sdgoals[5].name} desc={sdgoals[5].desc} tracker={sdgoals[5].tracker} logo={sdgoals[6].logo} />
                <SDGCard id={sdgoals[6].id} name={sdgoals[6].name} desc={sdgoals[6].desc} tracker={sdgoals[6].tracker} logo={sdgoals[7].logo} /> 
                <SDGCard id={sdgoals[7].id} name={sdgoals[7].name} desc={sdgoals[7].desc} tracker={sdgoals[7].tracker} logo={sdgoals[8].logo} /> 
                <SDGCard id={sdgoals[8].id} name={sdgoals[8].name} desc={sdgoals[8].desc} tracker={sdgoals[8].tracker} logo={sdgoals[9].logo} /> 
                <SDGCard id={sdgoals[9].id} name={sdgoals[9].name} desc={sdgoals[9].desc} tracker={sdgoals[9].tracker} logo={sdgoals[10].logo} /> 
                <SDGCard id={sdgoals[10].id} name={sdgoals[10].name} desc={sdgoals[10].desc} tracker={sdgoals[10].tracker} logo={sdgoals[11].logo} /> 
                <SDGCard id={sdgoals[11].id} name={sdgoals[11].name} desc={sdgoals[11].desc} tracker={sdgoals[11].tracker} logo={sdgoals[12].logo} /> 
                <SDGCard id={sdgoals[12].id} name={sdgoals[12].name} desc={sdgoals[12].desc} tracker={sdgoals[12].tracker} logo={sdgoals[13].logo} /> 
                <SDGCard id={sdgoals[13].id} name={sdgoals[13].name} desc={sdgoals[13].desc} tracker={sdgoals[13].tracker} logo={sdgoals[14].logo} /> 
                <SDGCard id={sdgoals[14].id} name={sdgoals[14].name} desc={sdgoals[14].desc} tracker={sdgoals[14].tracker} logo={sdgoals[15].logo} /> 
                <SDGCard id={sdgoals[15].id} name={sdgoals[15].name} desc={sdgoals[15].desc} tracker={sdgoals[15].tracker} logo={sdgoals[16].logo} />  
                </div>,
                document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
