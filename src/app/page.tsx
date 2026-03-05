import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enchanteur Contest 2026 | Win RM28,000 in Prizes!",
  description: "Join the Enchanteur contest! Purchase RM25+ and stand a chance to win RM28,000 in T&G vouchers plus 15 grand prizes.",
  icons: {
    icon: "/enchanteur-logo.png",
  },
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Playfair Display', 'Georgia', serif",
      background: "linear-gradient(180deg, #FFF0F3 0%, #FFE4E9 30%, #FFD6E0 100%)",
      color: "#1A1A1A",
      padding: 0,
    }}>
      {/* Header with Logo */}
      <header style={{
        background: "linear-gradient(135deg, #C41E3A 0%, #A01830 100%)",
        padding: "1.25rem 1rem",
        textAlign: "center",
        boxShadow: "0 4px 20px rgba(196, 30, 58, 0.3)",
      }}>
        <img 
          src="https://i.ibb.co/tT37c7Ck/Enchanteur-logo.png" 
          alt="Enchanteur" 
          style={{
            height: "clamp(40px, 10vw, 60px)",
            background: "white",
            borderRadius: "12px",
            padding: "8px 16px",
          }}
        />
        <p style={{
          fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
          color: "rgba(255,255,255,0.9)",
          margin: 0,
          fontStyle: "italic",
        }}>
          French-Inspired Female Self-Care
        </p>
      </header>

      {/* Banner Image Area */}
      <div style={{
        background: "linear-gradient(135deg, #C41E3A 0%, #8B1425 100%)",
        padding: "3rem 1rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative hearts */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "2rem",
          opacity: 0.2,
        }}>💕</div>
        <div style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          fontSize: "1.5rem",
          opacity: 0.15,
        }}>🌹</div>
        <div style={{
          position: "absolute",
          bottom: "15%",
          left: "15%",
          fontSize: "1.25rem",
          opacity: 0.2,
        }}>💗</div>
        
        <h2 style={{
          fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
          fontWeight: "700",
          color: "white",
          marginBottom: "1rem",
          position: "relative",
        }}>
          💐 Contest 2026 💐
        </h2>
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "rgba(255,255,255,0.95)",
          maxWidth: "500px",
          margin: "0 auto",
        }}>
          May 1 - 31, 2026
        </p>
      </div>

      {/* Prize Hero Section */}
      <section style={{
        background: "white",
        margin: "-2rem 1rem 2rem",
        borderRadius: "20px",
        padding: "2rem 1.5rem",
        boxShadow: "0 10px 40px rgba(196, 30, 58, 0.15)",
        position: "relative",
        zIndex: 10,
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div style={{
          textAlign: "center",
        }}>
          <h3 style={{
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            fontWeight: "700",
            color: "#C41E3A",
            margin: 0,
          }}>
            RM28,000 in Prizes!
          </h3>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          textAlign: "center",
        }}>
          <div style={{
            padding: "1.5rem 0.5rem",
            background: "linear-gradient(180deg, #FFF5F6 0%, #FFE8EC 100%)",
            borderRadius: "16px",
            border: "1px solid #FFD6E0",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏆</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#C41E3A" }}>15</div>
            <div style={{ fontSize: "0.75rem", color: "#666" }}>Grand Prizes</div>
          </div>
          <div style={{
            padding: "1.5rem 0.5rem",
            background: "linear-gradient(180deg, #FFF5F6 0%, #FFE8EC 100%)",
            borderRadius: "16px",
            border: "1px solid #FFD6E0",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💰</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#C41E3A" }}>RM28K</div>
            <div style={{ fontSize: "0.75rem", color: "#666" }}>T&G Vouchers</div>
          </div>
          <div style={{
            padding: "1.5rem 0.5rem",
            background: "linear-gradient(180deg, #FFF5F6 0%, #FFE8EC 100%)",
            borderRadius: "16px",
            border: "1px solid #FFD6E0",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚡</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#C41E3A" }}>Instant</div>
            <div style={{ fontSize: "0.75rem", color: "#666" }}>Credit</div>
          </div>
        </div>
      </section>

      {/* Prize Cards */}
      <section style={{
        padding: "0 1.5rem 2rem",
        maxWidth: "600px",
        margin: "0 auto 2rem",
      }}>
        <h4 style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#C41E3A",
          textAlign: "center",
          marginBottom: "1rem",
        }}>
          🎁 Consolation Prizes
        </h4>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0.75rem",
        }}>
          {[
            { amount: "RM50", emoji: "🎖️" },
            { amount: "RM20", emoji: "🥈" },
            { amount: "RM10", emoji: "🥉" },
            { amount: "RM5", emoji: "🎁" },
          ].map((prize, i) => (
            <div key={i} style={{
              background: "white",
              borderRadius: "12px",
              padding: "1rem 0.5rem",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              border: "2px solid transparent",
            }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>{prize.emoji}</div>
              <div style={{ fontWeight: "700", color: "#C41E3A" }}>{prize.amount}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Participate */}
      <section style={{
        background: "white",
        margin: "0 1rem 2rem",
        borderRadius: "20px",
        padding: "2rem 1.5rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#C41E3A",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}>
          📋 How to Participate
        </h3>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}>
          {/* Step 1 */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            background: "linear-gradient(135deg, #FFF5F6 0%, #FFE8EC 100%)",
            borderRadius: "12px",
            borderLeft: "4px solid #C41E3A",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              background: "#C41E3A",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "1.25rem",
              flexShrink: 0,
            }}>1</div>
            <div>
              <div style={{ fontWeight: "600", color: "#1A1A1A" }}>Purchase RM25+ of Enchanteur</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>Any Enchanteur products</div>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.25rem",
            background: "linear-gradient(135deg, #FFF5F6 0%, #FFE8EC 100%)",
            borderRadius: "12px",
            borderLeft: "4px solid #C41E3A",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              background: "#C41E3A",
              color: "white",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "1.25rem",
              flexShrink: 0,
            }}>2</div>
            <div>
              <div style={{ fontWeight: "600", color: "#1A1A1A" }}>Include 1 Deodorant</div>
              <div style={{ fontSize: "0.875rem", color: "#666" }}>Any Enchanteur Deodorant</div>
            </div>
          </div>

          {/* Step 3 - CTA */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "1.5rem",
            background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
            borderRadius: "12px",
            borderLeft: "4px solid #047857",
          }}>
            <div style={{
              width: "40px",
              height: "40px",
              background: "white",
              color: "#10B981",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "700",
              fontSize: "1.25rem",
              flexShrink: 0,
            }}>3</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: "600", color: "white" }}>Upload Your Receipt</div>
              <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.9)" }}>via TNG eWallet</div>
            </div>
            <a 
              href="https://tngdigital.com.my/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "0.75rem 1.5rem",
                background: "white",
                color: "#10B981",
                borderRadius: "50px",
                fontWeight: "700",
                fontSize: "0.875rem",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Upload 📱
            </a>
          </div>
        </div>

        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "#FFF7ED",
          borderRadius: "12px",
          border: "1px solid #FED7AA",
          textAlign: "center",
        }}>
          <span style={{ color: "#C2410C", fontWeight: "500", fontSize: "0.875rem" }}>
            ⚠️ One entry per person (verified via T&G account)
          </span>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section style={{
        background: "white",
        margin: "0 1rem 2rem",
        borderRadius: "20px",
        padding: "2rem 1.5rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <h3 style={{
          fontSize: "1.25rem",
          fontWeight: "600",
          color: "#C41E3A",
          marginBottom: "1rem",
          textAlign: "center",
        }}>
          📜 Terms & Conditions
        </h3>
        
        <ol style={{
          paddingLeft: "1.25rem",
          fontSize: "0.8125rem",
          color: "#4B5563",
          lineHeight: "1.8",
          margin: 0,
        }}>
          <li style={{ marginBottom: "0.5rem" }}>Minimum purchase of RM25 of any Enchanteur product</li>
          <li style={{ marginBottom: "0.5rem" }}>One entry per person - verified via T&G account</li>
          <li style={{ marginBottom: "0.5rem" }}>Receipt must be valid from the following retailer list</li>
          <li style={{ marginBottom: "0.5rem" }}>Contest period: May 1 - 31, 2026</li>
          <li style={{ marginBottom: "0.5rem" }}>Purchase must include at least 1 Enchanteur Deodorant</li>
        </ol>
      </section>

      {/* Footer */}
      <footer style={{
        background: "#1A1A1A",
        padding: "2rem 1rem",
        textAlign: "center",
      }}>
        <p style={{ color: "white", marginBottom: "0.5rem", fontSize: "0.875rem" }}>
          Powered by <strong>Buzz</strong> × <strong>Wipro Unza</strong>
        </p>
        <p style={{ color: "#666", fontSize: "0.75rem" }}>
          © 2026 Enchanteur. All rights reserved.
        </p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}