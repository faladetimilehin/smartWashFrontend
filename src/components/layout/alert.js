import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({alerts}) => {
    return (
        <>
            { alerts !== null && alerts.length > 0 && alerts.map(alert => (
                <div className={`container mt-4 alert alert-${alert.alertType}`} key={alert.id}>
                    { alert.msg}
                </div>
            ))}
        </>
    )
}

Alert.propTypes = {
    alert: PropTypes.array
}

const mapStateToProps = (state) => {
    return {
        alerts: state.alert
    }
}

export default connect(mapStateToProps) (Alert)
