import React from 'react';
import {Infrastructure, InfrastructureInterface} from "./infrastructure";
import "./infrastructureList.css"


const InfrastructureList = ({infrastructures, infraClickHandler, amountRobots}: { infrastructures: InfrastructureInterface[], infraClickHandler: any, amountRobots: number }) => {
    return (
        <div className={"infra-list"}>
            {
                infrastructures.map(
                    (infrastructure) => {
                        return <Infrastructure infrastructure={infrastructure}
                                               key={infrastructure.id}
                                               infraClickHandler={infraClickHandler}
                                               amountRobots={amountRobots}
                        />;
                    }
                )
            }
        </div>
    );
};

export default InfrastructureList;