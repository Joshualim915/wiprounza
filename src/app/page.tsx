import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wiprounza",
  description: "Welcome to Wiprounza",
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
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      padding: "2rem",
      textAlign: "center",
    }}>
      <h1 style={{
        fontSize: "4rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        letterSpacing: "-0.05em",
      }}>
        Wiprounza
      </h1>
      <p style={{
        fontSize: "1.5rem",
        opacity: 0.9,
        maxWidth: "600px",
      }}>
        Coming Soon
      </p>
    </div>
  );
}
