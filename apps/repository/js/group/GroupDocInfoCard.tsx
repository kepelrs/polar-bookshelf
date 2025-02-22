import * as React from 'react';
import {PersistenceLayerManager} from '../../../../web/js/datastore/PersistenceLayerManager';
import {Group} from "../../../../web/js/datastore/sharing/db/Groups";
import {VerticalAlign} from "../../../../web/js/ui/util/VerticalAlign";
import {LeftRightSplit} from "../../../../web/js/ui/left_right_split/LeftRightSplit";
import {GroupDocAddButton} from "./GroupDocAddButton";
import {GroupDocInfo} from "../../../../web/js/datastore/sharing/GroupDocInfos";
import {PersistenceLayerProvider} from "../../../../web/js/datastore/PersistenceLayer";

export class GroupDocInfoCard extends React.Component<IProps, IState> {

    constructor(props: IProps, context: any) {
        super(props, context);
    }

    public render() {

        return (

            <div className="border-top border-left border-right p-2"
                 style={{display: 'flex'}}>

                {/*<LeftRightSplit left={<div style={{display: 'flex'}}>*/}

                {/*                    <VerticalAlign>*/}
                {/*                        <a className="text-lg" href={'#group/' + this.props.id}>{group.name}</a>*/}
                {/*                    </VerticalAlign>*/}

                {/*                </div>}*/}
                {/*                right={<GroupDocAddButton groupID={group.id}/>}/>*/}

                {/*<p>*/}
                {/*    {group.description}*/}
                {/*</p>*/}

                {/*<div style={{display: 'flex'}}>*/}

                {/*    <VerticalAlign>*/}
                {/*        <i className="fa fa-users mr-1 text-muted" aria-hidden="true"/>*/}
                {/*    </VerticalAlign>*/}

                {/*    <VerticalAlign>*/}
                {/*        {group.nrMembers} members*/}
                {/*    </VerticalAlign>*/}

                {/*</div>*/}

                <div style={{flexGrow: 1}} className="mt-auto mb-auto">
                    {this.props.title}
                </div>

                <div>

                    <GroupDocAddButton persistenceLayerProvider={this.props.persistenceLayerProvider}
                                       groupID={this.props.groupID}
                                       fingerprint={this.props.fingerprint}/>

                </div>

            </div>

        );
    }

}

export interface IProps extends GroupDocInfo {
    readonly persistenceLayerProvider: PersistenceLayerProvider;

}

export interface IState {
}
