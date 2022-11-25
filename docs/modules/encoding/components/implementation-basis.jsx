import React from "react";
import {Card, Divider, Form, Select} from "antd";


export default function ImplementationBasis() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Basis for Implementation'>
                <Select options={[{
                    label: 'General Appropriations Act (GAA)'
                },
                    {
                        label: 'Multi-Year Obligational Authority (MYOA)/ Multi-Year Contracting Authority (MYCA)',
                    },
                    {
                        label: 'Existing masterplan/Sector studies/procurement plan' },
                    {
                        label: 'List of Regional Development Council-endorsed projects' },
                    {
                        label: 'Signed Agreements (e.g. Peace agreements)' },
                    {
                        label: 'Existing laws, rules or regulations' },
                    {
                        label: 'Regular program'
                    },
                ]} mode='multiple' />
            </Form.Item>

            <Card.Meta title={<Divider orientation='left'>4. Basis for Implementation</Divider>} description={<div>
                <p>Identify which of the following serve as the Basis for Implementation of the program/ project:</p>

                <ul>
                    <li>General Appropriations Act (GAA);</li>
                    <li>Multi-Year Obligational Authority (MYOA)/ Multi-Year Contracting Authority (MYCA);</li>
                    <li>Existing masterplan/Sector studies/procurement plan;</li>
                    <li>List of Regional Development Council-endorsed projects;</li>
                    <li>Signed Agreements (e.g. Peace agreements);</li>
                    <li>Existing laws, rules or regulations; or</li>
                    <li>Regular program.</li>
                </ul>
            </div>} />
        </Card>
    )
}
