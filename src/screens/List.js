import React from 'react'
import { Link} from 'react-router-dom'
import { Card, Col, Icon, Row } from 'react-materialize'


import { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';

// import './Sample.less';

const now = new Date();
const yesterdayBegin = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

export default function List(props) {

    
    console.log('props in sitter list', props)
    return (
        <>
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <div class="col s5" class="center">
                        <Card
                            actions={[
                                <a key="1" href="#" class="black-text">Schedule a booking</a>,
                                <a key="2" href="#" class="black-text">Contact this sitter</a>
                            ]}
                            className="#e57373 red lighten-2"
                            closeIcon={<Icon>close</Icon>}
                            revealIcon={<Icon>more_vert</Icon>}
                            textClassName="white-text"
                            title={props.sitterListings.first_name}
                        >
                            <ul >
                                <li>
                                    <Link to={`/sitterlisting/${props.sitterListings.id}`} class="black-text">learn more about this sitter</Link>
                                </li>
                                <li>
                                    {props.sitterListings.rating} rating
                                </li>
                                <li>
                                    3 reviews
                                </li>
                            </ul>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}
