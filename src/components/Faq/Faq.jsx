import styles from './Faq.module.css'

const faq=[
    {
        q:"What payments method do you accept?",
        a:"We accept all major credit cards, PayPal, Apple Pay and other secure payment options."
    },
    {
        q:"Can I modify my order after placing it?",
        a:"If you need to make changes, email us at friends@wimpdecaf.com as soon as possible. If your order hasn’t shipped yet, we’ll do our best to update it."
    },
    {
        q:"When will my order ship?",
        a:"Orders usually ship within 1-2 business days. If you order on a weekend or holiday, we’ll ship it out the next business day."
    },
    {
        q:"What should I do if my order hasn't arrived?",
        a:"If your order hasn't arrived within the estimated time frame, please first check the tracking information provided. If you need further assistance, contact our customer service team at friends@wimpdecaf.com."
    },
    {
        q:"How do shipping costs calculated ?",
        a:"Shipping costs are calculated based on the weight of your order and the destination country. You can see the shipping charges at checkout after entering your address."
    },
    {
        q:"What should I do if my order is delayed or lost?",
        a:"Check your tracking information first. If it looks like something went wrong, reach out to us at friends@wimpdecaf.com, and we’ll make it right."
    },
    {
        q:"What should I do if I recieve damaged or incorrect item?",
        a:"If your order arrives damaged or incorrect, please contact us immediately at friends@wimpdecaf.com with your order number and a description of the issue. We will work quickly to resolve the problem, including sending a replacement if necessary."
    },
    {
        q:"Do you offer International shipping?",
        a:"Yes, we ship to many countries around the world. Please refer to our Shipping page for details on international shipping options and rates."
    },
    {
        q:"Are there extra costs for International shipping?",
        a:"We accept all major credit cards, PayPal, Apple Pay and other secure payment options."
    },

]

export default function Faq() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>FAQs</h1>

      <div className={styles.faqContainer}>
        {faq.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.question}>{item.q}</h3>
              <p className={styles.answer}>{item.a}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}