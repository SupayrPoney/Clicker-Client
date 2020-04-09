import React from 'react';
import {Infrastructure, InfrastructureInterface} from "./infrastructure";
import "./infrastructureList.css"


const InfrastructureList = ({infrastructures, infraClickHandler}: { infrastructures: InfrastructureInterface[], infraClickHandler: any }) => {
    return (
        <div className={"infra-list"}>
            {
                infrastructures.map(
                    (infrastructure) => {
                        return <Infrastructure infrastructure={infrastructure} key={infrastructure.id}
                                               infraClickHandler={infraClickHandler}/>;
                    }
                )
            }
        </div>
    );
};

export default InfrastructureList;