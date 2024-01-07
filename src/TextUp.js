import React from 'react'

export default function TextUp(props) {
    return
    (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea class="form-control" id="my1" rows="8"></textarea>
            </div>
        </div>
    )
}
