import React from 'react'
import {Avatar, Badge, Card, Divider, Table} from "antd";
import { LockFilled } from "@ant-design/icons";
import moment from "moment";

export default function ProjectList() {
    const data = [
        {
            "key": "9659eeef",
            "uuid": "9659eeef",
            "title": "Nobis et deleniti voluptas.",
            "office": {
                "name": "Project Development Service",
                "acronym": "PDS",
                "color": "#8B8000",
                "projects_count": 2,
                "users_count": 4
            },
            "permissions": {
                "view": true,
                "update": false,
                "delete": false,
                "lock": false,
                "unlock": false,
                "validate": false,
                "drop": false,
                "updatePipol": false
            },
            "user": {
                "id": 153,
                "avatar": "FF",
                "color": "#8B8000",
                "fullname": "Fernando Flores",
                "username": "pds_01",
                "email": "fernando.flores@da.gov.ph\npds@da.gov.ph",
                "office": "PDS",
                "contact_number": "8920-0928",
                "last_login_at": "2022-10-28 10:26:45"
            },
            "issues": 0,
            "comments": 0,
            "pips_status": {
                "color": "orange",
                "name": "DROPPED BY IPD"
            },
            "passes_validation": 0,
            "pipol_status": {
                "color": "gold",
                "name": "NEDA:VALIDATED"
            },
            "reviewers": [
                {
                    "id": 5,
                    "avatar": "JM",
                    "color": "#366658",
                    "fullname": "Joseph Manicad",
                    "username": "ipd_chief",
                    "email": "manicad3480@gmail.com",
                    "office": "IPD",
                    "contact_number": "2304",
                    "last_login_at": null
                },
                {
                    "id": 13,
                    "avatar": "JF",
                    "color": "#366658",
                    "fullname": "Jerech Flauta",
                    "username": "ipd_08",
                    "email": "jechflauta@gmail.com",
                    "office": "IPD",
                    "contact_number": "2306",
                    "last_login_at": null
                }
            ],
            "is_locked": false,
            "updated_at": "2022-10-28T00:36:21.000000Z"
        },
        {
            "key": "6g54df8f",
            "uuid": "6g54df8f",
            "title": "Aspernatur non reprehenderit hic eaque in.",
            "office": {
                "name": "Project Development Service",
                "acronym": "PDS",
                "color": "#8B8000",
                "projects_count": 2,
                "users_count": 4
            },
            "permissions": {
                "view": true,
                "update": false,
                "delete": false,
                "lock": false,
                "unlock": false,
                "validate": false,
                "drop": false,
                "updatePipol": false
            },
            "user": {
                "id": 154,
                "avatar": "RD",
                "color": "#8B8000",
                "fullname": "Rowel del Rosario",
                "username": "pds_02",
                "email": "pied@da.gov.ph\nrowel_delrosarion@yahoo.com",
                "office": "PDS",
                "contact_number": "8920-0928\n2229/2243",
                "last_login_at": null
            },
            "issues": 0,
            "comments": 0,
            "pips_status": {
                "color": "blue",
                "name": "DRAFT"
            },
            "passes_validation": 0,
            "pipol_status": {
                "color": "blue",
                "name": "IPD:DRAFT"
            },
            "reviewers": [
                {
                    "id": 5,
                    "avatar": "JM",
                    "color": "#366658",
                    "fullname": "Joseph Manicad",
                    "username": "ipd_chief",
                    "email": "manicad3480@gmail.com",
                    "office": "IPD",
                    "contact_number": "2304",
                    "last_login_at": null
                },
                {
                    "id": 13,
                    "avatar": "JF",
                    "color": "#366658",
                    "fullname": "Jerech Flauta",
                    "username": "ipd_08",
                    "email": "jechflauta@gmail.com",
                    "office": "IPD",
                    "contact_number": "2306",
                    "last_login_at": null
                }
            ],
            "is_locked": false,
            "updated_at": "2022-10-28T00:36:21.000000Z"
        }
    ]

    return (
        <Card size='small'>
            <Table bordered={false} size='small' columns={[{
                dataIndex: 'office',
                title: 'Office',
                key: 'office',
                render: office => office.acronym
            },{
                dataIndex: 'title',
                title: 'Title',
                key: 'title'
            },{
                dataIndex: 'issues_comments',
                title: 'Issues/ Comments',
                key: 'issues_comments',
                render: (_, record) => `${record.issues} / ${record.comments}`,
                align: 'center'
            },{
                dataIndex: 'pips_status',
                title: 'PIPS Status',
                key: 'pips_status',
                render: (pips_status) => <Badge color={pips_status.color}>{pips_status.name}</Badge>
            },{
                dataIndex: 'passes_validation',
                title: 'Validated?',
                key: 'validated',
                align: 'center'
            },{
                dataIndex: 'pipol_status',
                title: 'PIPOL Status',
                key: 'pipol_status',
                render: (pipol_status) => <Badge color={pipol_status.color}>{pipol_status.name}</Badge>
            },{
                dataIndex: 'updated_at',
                title: 'Last Updated',
                key: 'updated_at',
                render: val => moment(val).fromNow()
            },{
                dataIndex: 'user',
                title: 'Added By',
                key: 'user',
                align: 'center',
                render: user => <Avatar style={{
                    backgroundColor: user.color
                }}>{user.avatar}</Avatar>,
            },{
                dataIndex: 'reviewers',
                title: 'Reviewers',
                key: 'reviewers',
                align: 'center',
                render: reviewers => <Avatar.Group>
                    {reviewers.map(({color, avatar}) => <Avatar style={{
                        backgroundColor: color,
                    }}>{avatar}</Avatar>)}
                </Avatar.Group>
            },{
                dataIndex: 'id',
                title: 'Actions',
                key: 'id'
            },{
                dataIndex: 'locked',
                title: <LockFilled />,
                key: 'locked'
            }]}
           dataSource={data} />
            <Card.Meta
                title={<Divider orientation='left'>PIP/TRIP Table</Divider>}
                description='The list of programs and projects for inclusion to PIP, TRIP and CIP as shown in the table below.' />
        </Card>
    )
}
