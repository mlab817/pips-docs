import React from "react";
import {Card, Divider, Form, TreeSelect} from "antd";

export default function Locations() {
    return (
        <Card style={{
            marginTop: 16
        }}>
            <Form.Item label='Regions/Provinces'>
                <TreeSelect treeCheckable treeDefaultExpandAll treeData={[
                    {
                        "value": 1,
                        "label": "NCR",
                        "children": [
                            {
                                "value": 2,
                                "label": "Metro Manila"
                            }
                        ]
                    },
                    {
                        "value": 3,
                        "label": "CAR",
                        "children": [
                            {
                                "value": 4,
                                "label": "Abra"
                            },
                            {
                                "value": 5,
                                "label": "Apayao"
                            },
                            {
                                "value": 6,
                                "label": "Benguet"
                            },
                            {
                                "value": 7,
                                "label": "Ifugao"
                            },
                            {
                                "value": 8,
                                "label": "Kalinga"
                            },
                            {
                                "value": 9,
                                "label": "Mountain Province"
                            }
                        ]
                    },
                    {
                        "value": 10,
                        "label": "Region I",
                        "children": [
                            {
                                "value": 11,
                                "label": "Ilocos Norte"
                            },
                            {
                                "value": 12,
                                "label": "Ilocos Sur"
                            },
                            {
                                "value": 13,
                                "label": "La Union"
                            },
                            {
                                "value": 14,
                                "label": "Pangasinan"
                            }
                        ]
                    },
                    {
                        "value": 15,
                        "label": "Region II",
                        "children": [
                            {
                                "value": 16,
                                "label": "Batanes"
                            },
                            {
                                "value": 17,
                                "label": "Cagayan"
                            },
                            {
                                "value": 18,
                                "label": "Isabela"
                            },
                            {
                                "value": 19,
                                "label": "Nueva Vizcaya"
                            },
                            {
                                "value": 20,
                                "label": "Quirino"
                            }
                        ]
                    },
                    {
                        "value": 21,
                        "label": "Region III",
                        "children": [
                            {
                                "value": 22,
                                "label": "Bataan"
                            },
                            {
                                "value": 23,
                                "label": "Bulacan"
                            },
                            {
                                "value": 24,
                                "label": "Nueva Ecija"
                            },
                            {
                                "value": 25,
                                "label": "Pampanga"
                            },
                            {
                                "value": 26,
                                "label": "Tarlac"
                            },
                            {
                                "value": 27,
                                "label": "Zambales"
                            },
                            {
                                "value": 28,
                                "label": "Aurora"
                            }
                        ]
                    },
                    {
                        "value": 29,
                        "label": "Region IV-A",
                        "children": [
                            {
                                "value": 30,
                                "label": "Batangas"
                            },
                            {
                                "value": 31,
                                "label": "Cavite"
                            },
                            {
                                "value": 32,
                                "label": "Laguna"
                            },
                            {
                                "value": 33,
                                "label": "Quezon"
                            },
                            {
                                "value": 34,
                                "label": "Rizal"
                            }
                        ]
                    },
                    {
                        "value": 35,
                        "label": "Region IV-B",
                        "children": [
                            {
                                "value": 36,
                                "label": "Marinduque"
                            },
                            {
                                "value": 37,
                                "label": "Occidental Mindoro"
                            },
                            {
                                "value": 38,
                                "label": "Oriental Mindoro"
                            },
                            {
                                "value": 39,
                                "label": "Palawan"
                            },
                            {
                                "value": 40,
                                "label": "Romblon"
                            }
                        ]
                    },
                    {
                        "value": 41,
                        "label": "Region V",
                        "children": [
                            {
                                "value": 42,
                                "label": "Albay"
                            },
                            {
                                "value": 43,
                                "label": "Camarines Norte"
                            },
                            {
                                "value": 44,
                                "label": "Camarines Sur"
                            },
                            {
                                "value": 45,
                                "label": "Catanduanes"
                            },
                            {
                                "value": 46,
                                "label": "Masbate"
                            },
                            {
                                "value": 47,
                                "label": "Sorsogon"
                            }
                        ]
                    },
                    {
                        "value": 48,
                        "label": "Region VI",
                        "children": [
                            {
                                "value": 49,
                                "label": "Aklan"
                            },
                            {
                                "value": 50,
                                "label": "Antique"
                            },
                            {
                                "value": 51,
                                "label": "Capiz"
                            },
                            {
                                "value": 52,
                                "label": "Iloilo"
                            },
                            {
                                "value": 53,
                                "label": "Negros Occidental"
                            },
                            {
                                "value": 54,
                                "label": "Guimaras"
                            }
                        ]
                    },
                    {
                        "value": 55,
                        "label": "Region VII",
                        "children": [
                            {
                                "value": 56,
                                "label": "Bohol"
                            },
                            {
                                "value": 57,
                                "label": "Cebu"
                            },
                            {
                                "value": 58,
                                "label": "Negros Oriental"
                            },
                            {
                                "value": 59,
                                "label": "Siquijor"
                            }
                        ]
                    },
                    {
                        "value": 60,
                        "label": "Region VIII",
                        "children": [
                            {
                                "value": 61,
                                "label": "Eastern Samar"
                            },
                            {
                                "value": 62,
                                "label": "Leyte"
                            },
                            {
                                "value": 63,
                                "label": "Northern Samar"
                            },
                            {
                                "value": 64,
                                "label": "Samar"
                            },
                            {
                                "value": 65,
                                "label": "Southern Leyte"
                            },
                            {
                                "value": 66,
                                "label": "Biliran"
                            }
                        ]
                    },
                    {
                        "value": 67,
                        "label": "Region IX",
                        "children": [
                            {
                                "value": 68,
                                "label": "Zamboanga del Norte"
                            },
                            {
                                "value": 69,
                                "label": "Zamboanga del Sur"
                            },
                            {
                                "value": 70,
                                "label": "Zamboanga Sibugay"
                            }
                        ]
                    },
                    {
                        "value": 71,
                        "label": "Region X",
                        "children": [
                            {
                                "value": 72,
                                "label": "Bukidnon"
                            },
                            {
                                "value": 73,
                                "label": "Camiguin"
                            },
                            {
                                "value": 74,
                                "label": "Lanao del Norte"
                            },
                            {
                                "value": 75,
                                "label": "Misamis Occidental"
                            },
                            {
                                "value": 76,
                                "label": "Misamis Oriental"
                            }
                        ]
                    },
                    {
                        "value": 77,
                        "label": "Region XI",
                        "children": [
                            {
                                "value": 78,
                                "label": "Davao del Norte"
                            },
                            {
                                "value": 79,
                                "label": "Davao del Sur"
                            },
                            {
                                "value": 80,
                                "label": "Davao Oriental"
                            },
                            {
                                "value": 81,
                                "label": "Davao de Oro"
                            },
                            {
                                "value": 82,
                                "label": "Davao Occidental"
                            }
                        ]
                    },
                    {
                        "value": 83,
                        "label": "Region XII",
                        "children": [
                            {
                                "value": 84,
                                "label": "North Cotabato"
                            },
                            {
                                "value": 85,
                                "label": "South Cotabato"
                            },
                            {
                                "value": 86,
                                "label": "Sultan Kudarat"
                            },
                            {
                                "value": 87,
                                "label": "Sarangani"
                            }
                        ]
                    },
                    {
                        "value": 88,
                        "label": "CARAGA",
                        "children": [
                            {
                                "value": 89,
                                "label": "Agusan del Norte"
                            },
                            {
                                "value": 90,
                                "label": "Agusan del Sur"
                            },
                            {
                                "value": 91,
                                "label": "Dinagat Islands"
                            },
                            {
                                "value": 92,
                                "label": "Surigao del Norte"
                            },
                            {
                                "value": 93,
                                "label": "Surigao del Sur"
                            }
                        ]
                    },
                    {
                        "value": 94,
                        "label": "BARMM",
                        "children": [
                            {
                                "value": 95,
                                "label": "Basilan"
                            },
                            {
                                "value": 96,
                                "label": "Lanao del Sur"
                            },
                            {
                                "value": 97,
                                "label": "Maguindanao"
                            },
                            {
                                "value": 98,
                                "label": "Sulu"
                            },
                            {
                                "value": 99,
                                "label": "Tawi-Tawi"
                            }
                        ]
                    }
                ]} />
            </Form.Item>

            <Card.Meta
                title={<Divider orientation='left'>8. Regions/Provinces</Divider>}
                description='Select the provinces that the PAP covers in terms of impact. The region will be automatically selected if all the provinces in the region are covered by the PAP.'
            />
        </Card>
    )
}