import React, { useState } from 'react';
import "./RandomQuote.css";
import refresh from "../Assets/Refresh.png";
import twitter_icon from "../Assets/Twitter-X.png";
import linkedinIcon from "../Assets/Linkedin.png";

const RandomQuote = () => {
    const [quote, setQuote] = useState({
        text: "Always try one more time..!",
        author: "Bhagvat Mutthe"
    });

    // Fetch a new quote from the API
    const fetchQuote = async () => {
        try {
            const response = await fetch("https://quotes-api-self.vercel.app/quote");
            const data = await response.json();
            setQuote({
                text: data.quote,
                author: data.author,
            });
        } catch (error) {
            console.error("Error fetching quote:", error);
            setQuote({
                text: "An error occurred while fetching the quote.",
                author: "Unknown",
            });
        }
    };

    const twitter = () => {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`);
    }
    
    
  
    const linkedIn = () => {
        const shareText = `${quote.text} - ${quote.author}`;
        
        // First, copy the quote to the clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert("Quote copied to clipboard! Paste it in your LinkedIn post.");
    
            // Open the LinkedIn sharing URL
            const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                "https://yourwebsite.com"
            )}&summary=${encodeURIComponent(shareText)}`;
            window.open(url, "_blank");
        });
    };
    
    
    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author}</div>
                    <div className="icons">
                        <img src={refresh} onClick={fetchQuote} alt="Refresh" />
                        <img src={twitter_icon} onClick={() => { twitter() }} alt="Twitter" />
                        <img src={linkedinIcon} onClick={linkedIn} alt="Share on LinkedIn" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomQuote;
