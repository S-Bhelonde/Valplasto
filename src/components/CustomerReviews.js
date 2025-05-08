import React from 'react';

const reviews = [
  {
    name: "Riya",
    comment: "Absolutely loved the vanilla candle!",
    rating: 5
  },
  {
    name: "Aman",
    comment: "Great packaging and fragrance.",
    rating: 4
  },
  {
    name: "Sneha",
    comment: "The rose scent is so refreshing!",
    rating: 5
  }
];

export default function CustomerReviews() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Customer Reviews</h2>

      <a
        href="https://forms.gle/your-google-form-link"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        Submit Your Review
      </a>

      <div style={styles.reviewList}>
        {reviews.map((review, index) => (
          <div key={index} style={styles.card}>
            <h4 style={styles.name}>{review.name}</h4>
            <p style={styles.comment}>“{review.comment}”</p>
            <p style={styles.rating}>⭐ {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#fff7f0',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  heading: {
    fontSize: '28px',
    color: '#333',
    marginBottom: '20px'
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#ff8c42',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  reviewList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '260px',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
    textAlign: 'left'
  },
  name: {
    margin: '0 0 10px',
    color: '#ff8c42',
    fontWeight: 'bold'
  },
  comment: {
    fontStyle: 'italic',
    color: '#555'
  },
  rating: {
    marginTop: '10px',
    color: '#ffa500'
  }
};
