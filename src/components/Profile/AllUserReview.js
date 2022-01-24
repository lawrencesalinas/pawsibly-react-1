import React from 'react';
import { Link } from 'react-router-dom';
import { CardTitle, Card, Icon, Row } from "react-materialize";

export default function AllUserReview(props) {
    console.log('user review props at profile', props)
    return (
        <div class="container small">
            <div class="row center-cols justify-center">
                <Row class="small center-align">
                    <div class="col s6 offset-s3">
                        <Card className='card'
                            actions={[
                                <a key="1" href="#">Back To Top</a>
                            ]}
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://images.pexels.com/photos/5731822/pexels-photo-5731822.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />}
                            revealIcon={<Icon>more_vert</Icon>}
                            title={props.reviewListing.sitter}
                        >
                            <p>{props.reviewListing.id}</p>
                            <p>{props.reviewListing.rating}</p>
                            <p>{props.reviewListing.review}</p>
                            <Link
                                to={`/sitterListing/${props.reviewListing.id}`}>Go to Sitter Page</Link>
                        </Card>
                    </div>
                </Row>

            </div>
        </div>
    )

}
