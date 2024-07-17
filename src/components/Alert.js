import React from 'react'

function Alert(props) {
    
    return (
        <div style={{height:'50px'}}>
            <div className={`alert alert-primary alert-dismissible fade show`} role="alert">
                {/* <strong>{capitilize(props.alert.type)}</strong>: {props.alert.msg} */}
            </div>
        </div>
    )
}

export default Alert
