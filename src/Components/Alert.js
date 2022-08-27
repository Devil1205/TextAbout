import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: "40px" }}>
        {props.alert.message.length>0 && <div>
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1) + " : " + props.alert.message}</strong>
                </div>
            </div>}
        </div>
    )
}

export default Alert