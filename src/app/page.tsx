import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wipro Unza Malaysia",
  description: "Welcome to Wipro Unza Malaysia",
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      background: "linear-gradient(135deg, #009945 0%, #006B3F 100%)",
      color: "white",
      padding: "2rem",
      textAlign: "center",
    }}>
      <img 
        src="https://wiprocci.com/unza_malaysia/wp-content/uploads/cropped-Wipro-logoM-1-1.jpg"
        alt="Wipro Unza"
        style={{
          width: "280px",
          height: "auto",
          marginBottom: "2rem",
        }}
      />
      <h1 style={{
        fontSize: "3rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        letterSpacing: "-0.02em",
      }}>
        Wipro Unza Malaysia
      </h1>
      <p style={{
        fontSize: "1.25rem",
        opacity: 0.9,
        maxWidth: "600px",
      }}>
        Coming Soon
      </p>
    </div>
  );
}
