import React from "react";
import './styles/ProjectTile.scss';
import { ListItemIcon, Typography } from "@mui/material";
import { OpenInNewRounded } from '@mui/icons-material';

const ProjectTile = ({pos}: Number) => {
  return (
    <div className="project-tile">
        <div className="image-wrapper">
            <img alt="project" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1583&q=80" />
            
            <div className="header-wrapper">
                <Typography className="project-name" variant="h2" color="primary.white">
                    Project Name
                </Typography>
                <Typography variant="h3" color="primary.white">
                    See Project
                </Typography>
            </div>

            <div className="project-number">
                <Typography variant="h4" color="primary.dark">
                    {pos.toString()}
                </Typography>
                <ListItemIcon>
                    <OpenInNewRounded />
                </ListItemIcon>
            </div>
        </div>
    </div>
  );
};

export default ProjectTile;