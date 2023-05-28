import styles from "./Card.module.scss";

interface CardProps {
  imageUrls: string[];
  imageLinks?: Array<string | null>;
  showCopy?: boolean;
  copyTexts?: Array<string | null>;
  copyDescriptions?: Array<string | null>;
  ctaColor?: string;
  padding?: string;
  spacing?: string;
  containerColor?: string;
}

const Card: React.FC<CardProps> = ({
  imageUrls,
  imageLinks = [],
  showCopy = true,
  copyTexts = [],
  copyDescriptions = [],
  ctaColor = "#000000",
  padding = "0px",
  spacing = "0px",
  containerColor = "#ffffff",
}) => {
  const cardContainerStyle = {
    backgroundColor: containerColor,
    padding,
  } as const;

  const imagesContainerStyle = {
    gap: spacing,
  } as const;

  const imageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "18px",
    flex: 1,
  } as const;

  const ctaButtonStyle = {
    background: "black",
    color: "white",
    padding: "0.5rem 3rem",
    marginTop: "auto",
    fontWeight: "bold",
    textDecoration: "none",
    whiteSpace: "nowrap",
  } as const;

  return (
    <div className={styles.cardContainer} style={cardContainerStyle}>
      <div className={styles.imagesContainer} style={imagesContainerStyle}>
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`${styles.imageContainer}`}
            style={imageContainerStyle}
          >
            <a href={imageLinks[index] || "#"}>
              <img src={imageUrl} alt="Card" className={styles.image} />
            </a>
            {showCopy && (
              <>
                <h3 className={styles.header}>{copyTexts[index]}</h3>
                {copyDescriptions[index] && (
                  <p className={styles.description}>
                    {copyDescriptions[index]}
                  </p>
                )}{" "}
                <a
                  href={imageLinks[index] || "#"}
                  className={styles.ctaButton}
                  style={{ ...ctaButtonStyle, backgroundColor: ctaColor }}
                >
                  Shop Now
                </a>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
