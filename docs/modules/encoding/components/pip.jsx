import React from "react";
import {Card, Divider, Form, Switch} from "antd";

export default function Pip() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Public Investment Program'>
                <Switch />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>11. Public Investment Program</Divider>}
                description={
                    <div>
                        <p>Tick the checkbox if the PAP is qualified for submission to PIP considering the criteria of responsiveness, readiness, and typology.</p>

                        <ul>
                            <li> Responsiveness - (a) Responsive to the strategies and target outcomes/output in the Updated PDP 2017-2022 and
                            its RM, and 0 to 10-Point Socioeconomic Agenda; AND (b) Included in ANY of the following: GAA, Multi-Year Obligational Authority (MYOA)/ Multi-Year Contracting Authority (MYCA), Existing masterplan, sector
                            studies, or procurement plan, List of Regional Development Council (RDC) - endorsed NG PAPs, Signed
                            Agreements (e.g. Peace Agreements), Existing laws, rules or regulations, Regular program (e.g., Health Facilities
                            Enhancement Program, Payapa at Masaganang Pamayanan Program, etc.); OR Addresses the impact and/or
                            mitigate the loss due to the COVID-19 pandemic as identified in legislation and government reports.</li>
                            <li> Readiness - The PAP must begin implementation within the medium-term.</li>
                            <li> Typologies - The PAP must fall within the list of typology of PAPs below.</li>
                        </ul>
                    </div>
                }
            />
        </Card>

    )
}