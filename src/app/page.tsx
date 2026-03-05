import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wipro Unza × Buzz | Coming Soon",
  description: "Wipro Unza × Buzz - Something exciting is coming",
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Literata', 'Georgia', serif",
      background: "linear-gradient(135deg, #FFF8F3 0%, #FFE8E0 50%, #FFD6C8 100%)",
      color: "#1A1A1A",
      padding: "2rem",
      textAlign: "center",
    }}>
      {/* Logo Section */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        marginBottom: "3rem",
      }}>
        <img 
          src="https://wiprocci.com/unza_malaysia/wp-content/uploads/cropped-Wipro-logoM-1-1.jpg"
          alt="Wipro Unza"
          style={{
            width: "120px",
            height: "auto",
          }}
        />
        <span style={{
          fontSize: "2rem",
          color: "#9CA3AF",
          fontWeight: "300",
        }}>×</span>
        <div style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "white",
          fontWeight: "bold",
        }}>
          B
        </div>
      </div>

      {/* Main Content */}
      <h1 style={{
        fontSize: "clamp(2rem, 5vw, 3.5rem)",
        fontWeight: "600",
        marginBottom: "0.5rem",
        letterSpacing: "-0.03em",
        lineHeight: "1.2",
        color: "#1A1A1A",
      }}>
        Wipro Unza <span style={{
          background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>×</span> Buzz
      </h1>

      <p style={{
        fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        color: "#6B7280",
        maxWidth: "500px",
        marginBottom: "3rem",
        lineHeight: "1.6",
      }}>
        Something exciting is brewing.
        <br />
        Stay tuned!
      </p>

      {/* Coming Soon Badge */}
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.75rem",
        background: "white",
        padding: "1rem 2rem",
        borderRadius: "50px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
      }}>
        <span style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#FF6B6B",
          animation: "pulse 2s infinite",
        }} />
        <span style={{
          fontSize: "0.9rem",
          fontWeight: "600",
          color: "#1A1A1A",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}>
          Coming Soon
        </span>
      </div>

      {/* Decorative Elements */}
      <div style={{
        position: "absolute",
        top: "10%",
        left: "5%",
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%)",
        filter: "blur(40px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "15%",
        right: "10%",
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, rgba(255, 142, 83, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)",
        filter: "blur(60px)",
      }} />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}
