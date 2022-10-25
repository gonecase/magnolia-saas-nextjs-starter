import { useState } from 'react';

const Raw = (props) => {
    const [open, setOpen] = useState(false);
    console.log('raw props',props);
    return <>
        <article style={{
            background: 'yellow',
            margin: '10px'
        }}>
            <button style={{
                padding: '4px',
                lineHeight: 1,
                fontSize: '12px',
                border: '1px solid black',
                verticalAlign: 'top',
                textTransform: 'uppercase',
                marginRight: '12px'
            }} onClick={e => setOpen(!open)}>{!!open ? 'Collapse' : 'Expand'} Props</button>
            {!!props.metadata['mgnl:template'] ? `${props.metadata['mgnl:template']} is rendered RAW.` : "provided props.metadata['mgnl:template'] is null or undefined."}  
        </article>
        {open && <legend style={{
            margin: '12px'
        }}><code style={{fontSize: '12px'}}>{JSON.stringify(props)}</code></legend>}
    </>
}

export { Raw };

export { RawTemplate } from './RawTemplate';

export default Raw;