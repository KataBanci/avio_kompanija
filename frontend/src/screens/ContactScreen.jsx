const ContactScreen = () => {
  return (
    <section className='contact-page'>
      <div className='contact-container'>
        <h1>Contact</h1>

        <p className='contact-subtitle'>
          Do you have a question, need assistance, or want to book a flight? Our
          team is available for you 24/7!
        </p>

        <div className='contact-grid'>
          <div>
            <h2>Contact Information</h2>

            <div className='contact-info'>
              <p>✉</p>
              <div>
                <span>Email</span>
                <strong>info@aviokompanija.com</strong>
              </div>
            </div>

            <div className='contact-info'>
              <p>☎</p>
              <div>
                <span>Phone</span>
                <strong>+381 60 123 4567</strong>
              </div>
            </div>

            <div className='contact-info'>
              <p>⌖</p>
              <div>
                <span>Address</span>
                <strong>Bulevar Oslobođenja 10</strong>
                <strong>21000 Novi Sad, Serbia</strong>
              </div>
            </div>

            <div className='support-box'>
              <h2>Customer Support</h2>
              <p>✔ Customer Support 24/7</p>
              <p>✔ Assistance with flight bookings</p>
              <p>✔ Information about flights and baggage</p>
              <p>✔ Emergency support – contact us by phone</p>
            </div>

            <div className='follow-box'>
              <h2>Follow Us</h2>
              <p>Stay up to date with the latest offers and destinations:</p>

              <div className='social-icons'>
                <button>◎</button>
                <button>f</button>
                <button>𝕏</button>
              </div>
            </div>
          </div>

          <div className='message-box'>
            <h2>Send Us a Message</h2>

            <p>
              Fill out the form below and we will get back to you as soon as
              possible:
            </p>

            <form>
              <label>Full Name</label>
              <input type='text' placeholder='Enter your full name' />

              <label>Email Address</label>
              <input type='email' placeholder='Enter your email' />

              <label>Message</label>
              <textarea placeholder='Your message here...'></textarea>

              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactScreen