import React from "react";
import {Card, Divider, Form, Select} from "antd";

export default function SpatialCoverage() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Spatial Coverage'>
                <Select options={[{
                    label: 'Nationwide'
                },
                    {
                        label: 'Interregional',
                    },
                    {
                        label: 'Region-Specific' },
                    {
                        label: 'Abroad'
                    }
                ]} mode='multiple' />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>7. Spatial Coverage</Divider>}
                description={<>
                    <p>Select the Spatial Coverage of the program/project from the dropdown list,
                    which identifies the following options: Nationwide, Interregional, Region-Specific and
                    Abroad. If the coverage is Interregional or Region-Specific, choose the region(s),
                    province, and city/municipality covered by the program/project (if applicable) in the
                    dropdown field.</p>

                    <p>Please note of the following:</p>
                    <ul>
                        <li>Nationwide refers to program/project with spatial coverage/impact covering ALL
                        regions (in parts or as a whole);</li>
                        <li>Interregional refers to program/project with spatial coverage/impact covering
                            more than one region (in parts or as a whole), but NOT ALL regions;</li>
                        <li>Region-Specific refers to program/project with spatial coverage/impact covering
                            ONE REGION ONLY (in parts or as a whole); and</li>
                        <li>Abroad refers to program/project located or implemented outside the country that
                            will benefit Filipinos (e.g. Overseas Filipino Workers).</li>
                    </ul>
                    <p>Agencies are required to identify the spatial coverage up to provincial level for
                        interregional and region-specific programs/projects.</p>

                    <p>PAPs will still be considered NATIONWIDE even if BARMM is not included in its covered regions.</p>
                    </>
                }
            />
        </Card>
    )
}
