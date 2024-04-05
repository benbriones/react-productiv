import React, { useState } from "react";
import Quote from "./Quote";

const BASE_QUOTE_API_URL = "https://inspo-quotes-api.herokuapp.com";

/** Quote app for inspirational quiotes
 *
 * Props: none
 *
 * QuoteApp ---> Quote
 */

export default function QuoteApp() {
    const [quote, setQuote] = useState("");


    /** fetches random quote from quote API and sets it as quote */
    async function getQuote() {
        let response = await fetch(`${BASE_QUOTE_API_URL}/quotes/random`);
        let data = await response.json();
        setQuote(data.quote);
    }


    return (
        <div>
            {quote ?
                (<div>
                    <Quote quote={quote} />
                    <button className = "btn btn-primary btn-sm" onClick={getQuote}>New Quote</button>
                </div>
                ) : (
                    <button className = "btn btn-primary btn-sm" onClick={getQuote}>Click here for an inspirational quote!</button>
                )}
        </div>
    );
}