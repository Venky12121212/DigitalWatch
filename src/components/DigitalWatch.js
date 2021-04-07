import React, {Fragment, useState, useEffect} from 'react'

let DigitalWatch = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        let timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, []);

    return (
        <Fragment>
            <h4>{date.toLocaleTimeString()}</h4>
        </Fragment>
    )
}
export default DigitalWatch

