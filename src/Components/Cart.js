import {React} from 'react'

export default function Cart({count}){

    return (
<>
            <a id="cart" to="/order" >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 356.51 342.54">
                    <g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M3.75,143.78q13.37,46.28,24,93.28,5.34,23.59,10,47.35,2.41,12.36,4.64,24.77c1.3,7.22,1.31,16.88,5.3,23.18,5.47,8.6,16.24,7,25.08,7.15l24.93.34,49.62.66,99.05,1.33,49.52.66c8.57.11,17.52.45,22.51-8,3.87-6.58,4.12-16,5.5-23.41l18.35-98.48,9.08-48.76c1.52-8.13,3.1-16.24,4.55-24.38,1.65-9.28.67-20.21-10-23.49-7.63-2.34-17.11-1.32-25-1.6l-25-.89-50-1.77c-33.53-1.2-67.07-2.45-100.61-3.57-32.68-1.1-65.42-1.82-98.08.08q-12.25.72-24.47,2c-6.39.64-11.9,5-11.9,11.9,0,5.94,5.47,12.56,11.9,11.91,41.06-4.13,82.35-3.39,123.54-2q62.3,2.11,124.6,4.43l35,1.24,18,.64,8,.29,4,.14,2,.07c2.64.15,2.66.1.06-.18l-4.27-4.27a2.11,2.11,0,0,1-.51-2.18l-.55,2.92-1.27,6.83-2.18,11.7L324.55,178l-9.27,49.73-9.09,48.75-4.72,25.36-2.18,11.7c-.59,3.12-.93,8.25-2.24,10l4.28-4.27q4.64-.56,1.49-.43l-4,0-7.93-.11-15.85-.21-29.71-.4-62.4-.83-61.42-.83-30.84-.41c-10.35-.14-20.88.28-31.2-.49l6,1.62-1.17-.51,4.27,4.27c0,1.06-.05.81-.27-.76L68,318.15c-.39-2.23-.76-4.46-1.15-6.7q-1-5.73-2-11.46-2.16-11.92-4.51-23.82-4.57-23.25-9.81-46.38Q40,183.28,26.71,137.45c-4.24-14.7-27.23-8.45-23,6.33Z"/><path d="M91,236.29q90.39,2.44,180.83.6c15.3-.32,15.35-24.13,0-23.82q-90.41,1.85-180.83-.59c-15.33-.42-15.32,23.4,0,23.81Z"/><path d="M107.12,180.53A629.86,629.86,0,0,1,116,268.38c.49,15.29,24.31,15.35,23.81,0a675,675,0,0,0-9.76-94.18c-1.11-6.34-8.88-9.9-14.65-8.32-6.69,1.84-9.42,8.29-8.31,14.65Z"/><path d="M171.35,172.21a592.16,592.16,0,0,1,1.3,99.47c-.45,6.42,5.8,11.9,11.91,11.9,6.82,0,11.45-5.46,11.91-11.9a593.22,593.22,0,0,0-1.31-99.47c-.62-6.4-5-11.9-11.91-11.9-5.95,0-12.53,5.46-11.9,11.9Z"/><path d="M235.68,174.08c-6.74,30.26-5.64,61.51-11.54,91.87-1.23,6.31,1.78,12.85,8.31,14.65,5.84,1.6,13.42-2,14.65-8.32,5.9-30.36,4.82-61.66,11.54-91.87,1.39-6.27-1.9-12.88-8.32-14.64-6-1.64-13.24,2-14.64,8.31Z"/><path d="M135.05,93.52a728.67,728.67,0,0,1,29.82-75.7C167.57,12,166.53,5,160.6,1.53c-5.13-3-13.58-1.59-16.29,4.27a785.23,785.23,0,0,0-32.22,81.39c-2,6.1,2.35,13,8.32,14.65,6.48,1.78,12.61-2.19,14.64-8.32Z"/><path d="M193.35,18.46c8.81,28.71,27.17,52.47,40.33,79.09,2.85,5.77,11,7.36,16.29,4.27,5.88-3.43,7.14-10.5,4.28-16.29C242,60.85,224.47,38.7,216.31,12.13c-4.48-14.61-27.47-8.38-23,6.33Z"/><path d="M.2,123.17a31.78,31.78,0,0,0,4.31,19.36c3.09,5.41,10.91,7.74,16.29,4.27a12.13,12.13,0,0,0,4.27-16.29,17.17,17.17,0,0,1-.83-1.52c.6,1.53.67,1.67.21.43-.22-.83-.46-1.67-.67-2.51-.64-2.55-.13,2.34,0-.28.07-1.16.06-2.3.2-3.46.35-2.81-1.58-6.52-3.49-8.42a12.08,12.08,0,0,0-8.42-3.49C5,111.58,1,116.52.2,123.17Z"/><path d="M19.42,134.2c15.32,0,15.35-23.81,0-23.81s-15.35,23.81,0,23.81Z"/><path d="M26.21,137.17a4.82,4.82,0,0,1-.44-.88l1.2,2.84a10.77,10.77,0,0,1-.47-2l.42,3.17A62.88,62.88,0,0,0,26,132.6c-1.07-4.34-3.7-7.17-7.16-9.76-2.32-1.72-6.52-1.93-9.18-1.2a11.91,11.91,0,0,0-8.31,14.65,13.82,13.82,0,0,0,5.47,7.11,6.2,6.2,0,0,1-2.37-2.08c-.7-1-.86-1.15-.49-.43l-1.2-2.84a9.79,9.79,0,0,1,.45,1.85l-.43-3.17c.52,4.4.63,8.47,2.88,12.46,3,5.43,10.94,7.71,16.29,4.27a12.14,12.14,0,0,0,4.27-16.29Z"/><path d="M16.38,134.63c15.33,0,15.35-23.81,0-23.81s-15.34,23.81,0,23.81Z"/></g></g>
                </svg>
                <span>{count.length}</span>
            </a>

</>
    )
}
