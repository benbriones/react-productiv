import React from "react";

/** Component to show quote
 *
 * props: quote ({quote: {text, author}})
 */
export default function Quote({ quote }) {
    console.log("inside of quote", quote.quote)
    return (
        <div>
            {`${quote.text}  -${quote.author}`}
        </div>
    );
}