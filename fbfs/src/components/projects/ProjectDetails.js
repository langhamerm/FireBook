import React from 'react'

 const ProjectDetails = (props) => {
     const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
    <span className="card-title">Title: {id}</span>
                    <p>LALAL ALALALALA ALALLA</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By Dude</div>
                    <div>Posted @ Date</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectDetails;