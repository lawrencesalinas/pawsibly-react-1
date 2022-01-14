import { useState } from "react"
import { TextInput } from "react-materialize"
import { postReview } from "../api/reviews"

export default function createReview(props) {

    // const [value, setValue] = useState('')

    const createReview = () => {
        postReview(props.user, props.sitterId)
            .then(() => {

            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <>
            <TextInput id="TextInput-25" />
        </>
    )
}