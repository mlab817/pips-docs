import React, {useState} from 'react'
import {Avatar, Button, Card, Col, Divider, Drawer, Pagination, Row, Timeline} from "antd";
import moment from "moment";

export default function ProjectLogs() {
    const [open, setOpen] = useState(false)

    const activities = [
        {
            "key": 13,
            "log_name": "System",
            "resource": "Project",
            "subject": {
                "id": 24,
                "uuid": "9659eeef",
                "office_id": 13,
                "title": "Nobis et deleniti voluptas",
                "type_id": 2,
                "regular_program": 1,
                "program_id": 8,
                "description": "Consequatur facilis quaerat blanditiis facere quaerat. Nulla architecto eos est laborum repellat sed fugiat. Et in sed laudantium provident quo fugit. Sed quasi aut et est neque.",
                "total_cost": 2000000,
                "expected_outputs": "Temporibus quaerat consequatur ullam dignissimos. Id ratione ut eligendi.",
                "spatial_coverage_id": 2,
                "approval_level_id": 1,
                "approval_level_date": "1988-08-12",
                "pip": 1,
                "typology_id": 2,
                "cip": 0,
                "cip_type_id": 6,
                "trip": 1,
                "covid": 0,
                "rdip": 0,
                "research": 0,
                "ifp": 0,
                "ict": 0,
                "rdc_endorsement_required": 0,
                "rdc_endorsement_date": "1971-11-12",
                "category_id": 3,
                "uacs_code": null,
                "start_year": "2040",
                "end_year": "2029",
                "updates": "Et beatae quasi repudiandae. Praesentium aut cupiditate necessitatibus aut. Provident dolor qui rem nam ullam explicabo temporibus excepturi. Incidunt ut et temporibus recusandae.",
                "project_status_id": 3,
                "readiness_level_id": 2,
                "updates_as_of": "1983-07-05",
                "gad_id": 99,
                "icc_resubmission": 1,
                "pdp_chapter_id": 14,
                "implementation_risk": "Aspernatur perspiciatis impedit nulla. Magnam repellendus doloremque quis in exercitationem ex at. Tenetur ipsum aspernatur est consequatur.",
                "preparation_document_id": 2,
                "fs_needs_assistance": 0,
                "fs_status_id": 1,
                "fs_total_cost": "4000000.00",
                "fs_completion_date": "1974-03-12",
                "has_row": 0,
                "row_total_cost": null,
                "row_households": 0,
                "has_rap": 0,
                "rap_total_cost": null,
                "rap_households": 0,
                "has_row_rap": 1,
                "employment_generated": 1,
                "employed_male": 4,
                "employed_female": 5,
                "funding_source_id": 6,
                "implementation_mode_id": 75,
                "remarks": null,
                "pips_status_id": 4,
                "pipol_code": null,
                "pipol_url": null,
                "pipol_remarks": null,
                "pipol_status_id": 4,
                "passes_validation": 0,
                "validation_remarks": null,
                "user_id": 153,
                "locked_at": null,
                "created_at": "2022-10-28T00:36:21.000000Z",
                "updated_at": "2022-10-28T03:38:09.000000Z",
                "deleted_at": null,
                "investment_total": 0,
                "comments_count": 0,
                "issues_count": 7,
                "is_locked": false,
                "permissions": {
                    "view": true,
                    "update": true,
                    "delete": true,
                    "lock": false,
                    "unlock": false,
                    "validate": false,
                    "drop": false,
                    "updatePipol": false
                },
                "comments": [],
                "issue": {
                    "id": 2,
                    "project_id": 24,
                    "issues": "{\"Regular Program\":[\"A project cannot be a regular program.\"],\"Funding Sources (Infra)\":[\"The selected funding sources are not the same as those selected in infrastructure breakdown.\"],\"Employment Generation\":[\"The breakdown by sex should equal the total employment generated.\"],\"Implementation Period\":[\"Year of Project Completion should be the same or after Start of Project Implementation.\"],\"Total Cost vs Breakdown per Region\":[\"Total cost is not equal to breakdown per region.\"],\"Funding Sources (Total)\":[\"The selected funding sources are not the same as those selected in investment breakdown.\"],\"Total Cost vs Breakdown per Funding Source\":[\"Total cost must equal breakdown per funding source.\"]}",
                    "created_at": "2022-10-28T03:37:15.000000Z",
                    "updated_at": "2022-10-28T03:37:15.000000Z"
                }
            },
            "description": "updated",
            "causer": {
                "id": 153,
                "uuid": "cc9cf069",
                "first_name": "PIP",
                "last_name": "Encoder",
                "position": "Officer-in-Charge",
                "contact_number": "8920-0928",
                "username": "pds_01",
                "office_id": 13,
                "email": "fernando.flores@da.gov.ph\npds@da.gov.ph",
                "email_verified_at": null,
                "avatar": null,
                "is_active": false,
                "is_admin": false,
                "color": "#8B8000",
                "type": "na",
                "welcome_email_at": null,
                "deleted_at": null,
                "last_login_at": "2022-10-28 11:36:27",
                "initials": "PE",
                "all_roles": [
                    "PIP_ENCODER"
                ],
                "all_permissions": [],
                "roles": [
                    {
                        "id": 2,
                        "name": "PIP_ENCODER",
                        "guard_name": "api",
                        "created_at": "2022-10-26T12:53:17.000000Z",
                        "updated_at": "2022-10-26T12:53:17.000000Z",
                        "pivot": {
                            "model_id": 153,
                            "role_id": 2,
                            "model_type": "App\\Models\\User"
                        },
                        "permissions": []
                    }
                ],
                "permissions": []
            },
            "created_at": "2022-10-28T03:38:09.000000Z",
            "avatar": null
        }
    ]

    const pagination = {}

    return (
        <Card>
            <Button type='primary' onClick={() => setOpen(true)}>Click Me!</Button>

            <Drawer title='Logs' open={open} closable onClose={() => setOpen(false)}>
                <Timeline>
                    {activities?.map((activity, index) => (
                        <Timeline.Item key={index}>
                            <Row wrap={false} gutter={12}>
                                <Col flex='none'>
                                    <Avatar
                                        style={{
                                            backgroundColor: activity.causer?.color,
                                        }}
                                    >
                                        {activity.causer?.initials}
                                    </Avatar>
                                </Col>
                                <Col flex='auto'>
                                    {`${activity.causer?.first_name} ${activity.description} this project.`} <br />
                                    <small
                                        style={{
                                            color: 'gray',
                                        }}
                                    >
                                        {moment(activity.created_at).fromNow()}
                                    </small>
                                </Col>
                            </Row>
                        </Timeline.Item>
                    ))}
                </Timeline>

                <Pagination size='small' {...pagination} hideOnSinglePage />
            </Drawer>

            <Card.Meta
                title={<Divider orientation='left'>Project Logs</Divider>}
                description='History of activities of the PAP'
            />
        </Card>
    )
}
