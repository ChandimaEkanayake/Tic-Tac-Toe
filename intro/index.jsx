import {createRoot} from 'react-dom/client';

const root = createRoot(querySelector('#root'));
root.render(<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>);