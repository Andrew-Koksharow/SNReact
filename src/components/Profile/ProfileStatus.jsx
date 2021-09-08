import React from 'react';


class ProfileStatus extends React.Component  {

state = {
    editMode : false,
    status: this.props.status
}

activateMode = () => { 
    
    this.setState({
        editMode: true
    })
}
deactivateMode = () => {
    this.setState({
        editMode: false
    })
this.props.updateStatus(this.state.status)
}

onStatusChange = (e) => {
    this.setState( {
status: e.currentTarget.value
    })
}    

componentDidUpdate =(prevProps, prevState) => {
    
if (prevProps.status != this.state.status) {
    this.setState({
        status: this.props.status
    })
}
}

    render() {
  return (
    <div >
        {!this.state.editMode && 
       <div onDoubleClick={this.activateMode}>{this.props.status || 'Enter new status'}</div>
        }     
    
    {this.state.editMode && 
       <div><input autoFocus={true} onChange={this.onStatusChange.bind(this)}
        onBlur={this.deactivateMode} value={this.props.status}/> </div>
        }
       
       

    </div>)
}
}

export default ProfileStatus;