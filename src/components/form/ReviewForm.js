import React from "react";

const ReviewForm = ({handleSubmit, revText, labelText, defaultValue}) => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            </Form.Group>
            <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default ReviewForm;