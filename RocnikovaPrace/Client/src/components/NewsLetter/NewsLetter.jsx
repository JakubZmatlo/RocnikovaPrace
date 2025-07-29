import './NewsLetter.css'

const NewsLetter = () => {
    
    return (
        <div className="newsletter">
            <h1 className="newsletter-h">Never Miss a Deal!</h1>
            <p className="newsletter-p">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="newsletter-form">
                <input
                    className="newsletter-input"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="newsletter-button">
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default NewsLetter