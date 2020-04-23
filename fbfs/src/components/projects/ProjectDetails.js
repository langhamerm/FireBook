import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title: {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            finibus nisi est, dapibus volutpat ante accumsan eu. Cras tristique
            magna et purus malesuada accumsan.
          </p>
          <p>
            Pellentesque quis finibus ante, sed interdum diam. Integer
            consequat, arcu in vestibulum malesuada, diam metus vehicula sem, eu
            pulvinar dolor ante ac lacus. Suspendisse in tellus mi.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted By Dude</div>
          <div>Posted @ Date</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
