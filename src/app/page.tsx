import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enchanteur Contest 2026 | Win RM28,000 in Prizes!",
  description: "Join the Enchanteur contest! Purchase RM25+ and stand a chance to win RM28,000 in T&G vouchers plus 15 grand prizes.",
  icons: {
    icon: "/wipro-logo.jpg",
  },
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Literata', 'Georgia', serif",
      background: "linear-gradient(135deg, #FFE4E6 0%, #FCE7F3 50%, #FBCFE8 100%)",
      color: "#1A1A1A",
      padding: "2rem 1rem",
    }}>
      {/* Header */}
      <header style={{
        textAlign: "center",
        marginBottom: "2rem",
        paddingTop: "1rem",
      }}>
        <h1 style={{
          fontSize: "clamp(2rem, 6vw, 3.5rem)",
          fontWeight: "700",
          letterSpacing: "-0.03em",
          lineHeight: "1.1",
          color: "#BE185D",
          marginBottom: "0.5rem",
        }}>
          ✨ Enchanteur Contest 2026 ✨
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
          color: "#831843",
          fontWeight: "500",
        }}>
          May 1 - 31, 2026
        </p>
      </header>

      {/* Hero Section - Prize Display */}
      <section style={{
        background: "linear-gradient(135deg, #BE185D 0%, #DB2777 100%)",
        borderRadius: "24px",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        color: "white",
        marginBottom: "2rem",
        boxShadow: "0 20px 40px rgba(190, 24, 93, 0.3)",
      }}>
        <h2 style={{
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
          fontWeight: "600",
          marginBottom: "1.5rem",
        }}>
          🎁 RM28,000 in Prizes Await!
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          maxWidth: "600px",
          margin: "0 auto",
        }}>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "16px",
            padding: "1.5rem 1rem",
            backdropFilter: "blur(10px)",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🏆</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "700" }}>15</div>
            <div style={{ fontSize: "0.875rem", opacity: "0.9" }}>Grand Prize Winners</div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "16px",
            padding: "1.5rem 1rem",
            backdropFilter: "blur(10px)",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>💰</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "700" }}>RM28,000</div>
            <div style={{ fontSize: "0.875rem", opacity: "0.9" }}>T&G Vouchers</div>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)",
            borderRadius: "16px",
            padding: "1.5rem 1rem",
            backdropFilter: "blur(10px)",
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⚡</div>
            <div style={{ fontSize: "1.75rem", fontWeight: "700" }}>Instant</div>
            <div style={{ fontSize: "0.875rem", opacity: "0.9" }}>Winnings Credit</div>
          </div>
        </div>
      </section>

      {/* Prize Breakdown */}
      <section style={{
        background: "white",
        borderRadius: "20px",
        padding: "2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#BE185D",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}>
          💎 Prize Breakdown
        </h3>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "1rem",
        }}>
          <div style={{
            background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
            border: "2px solid #F9A8D4",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎖️</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#BE185D" }}>RM50</div>
            <div style={{ fontSize: "0.75rem", color: "#831843" }}>5% chance</div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
            border: "2px solid #F9A8D4",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🥈</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#BE185D" }}>RM20</div>
            <div style={{ fontSize: "0.75rem", color: "#831843" }}>15% chance</div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
            border: "2px solid #F9A8D4",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🥉</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#BE185D" }}>RM10</div>
            <div style={{ fontSize: "0.75rem", color: "#831843" }}>30% chance</div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 100%)",
            borderRadius: "12px",
            padding: "1.25rem",
            textAlign: "center",
            border: "2px solid #F9A8D4",
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎁</div>
            <div style={{ fontSize: "1.5rem", fontWeight: "700", color: "#BE185D" }}>RM5</div>
            <div style={{ fontSize: "0.75rem", color: "#831843" }}>50% chance</div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section style={{
        background: "white",
        borderRadius: "20px",
        padding: "2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#BE185D",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}>
          📋 How to Participate
        </h3>
        
        <ol style={{
          paddingLeft: "0",
          listStyle: "none",
          counterReset: "step",
        }}>
          {[
            { num: "1", title: "Purchase RM25+ of Enchanteur", desc: "Buy any Enchanteur products worth minimum RM25" },
            { num: "2", title: "Include 1 Deodorant", desc: "Your purchase must include at least 1 Enchanteur Deodorant" },
            { num: "3", title: "Verify via T&G Account", desc: "Log in with your T&G account to verify your entry" },
          ].map((step, i) => (
            <li key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
              marginBottom: "1.25rem",
              padding: "1rem",
              background: i === 2 ? "linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)" : "#FDF2F8",
              borderRadius: "12px",
            }}>
              <span style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                background: "#BE185D",
                color: "white",
                borderRadius: "50%",
                fontWeight: "700",
                fontSize: "1rem",
                flexShrink: 0,
              }}>
                {step.num}
              </span>
              <div>
                <div style={{ fontWeight: "600", color: "#1A1A1A", marginBottom: "0.25rem" }}>
                  {step.title}
                </div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  {step.desc}
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div style={{
          marginTop: "1.5rem",
          padding: "1rem",
          background: "#FFF7ED",
          borderRadius: "12px",
          border: "1px solid #FED7AA",
          textAlign: "center",
        }}>
          <span style={{ fontSize: "1.25rem" }}>⚠️</span>
          <span style={{ color: "#C2410C", fontWeight: "500" }}>
            {" "} One entry per person only (verified via T&G account)
          </span>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section style={{
        background: "white",
        borderRadius: "20px",
        padding: "2rem",
        marginBottom: "2rem",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}>
        <h3 style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#BE185D",
          marginBottom: "1rem",
          textAlign: "center",
        }}>
          📜 Terms & Conditions
        </h3>
        
        <ul style={{
          paddingLeft: "1.25rem",
          fontSize: "0.875rem",
          color: "#4B5563",
          lineHeight: "1.8",
        }}>
          <li style={{ marginBottom: "0.75rem" }}>Contest period: May 1 - 31, 2026</li>
          <li style={{ marginBottom: "0.75rem" }}>Minimum purchase of RM25 of any Enchanteur product required</li>
          <li style={{ marginBottom: "0.75rem" }}>Purchase must include at least 1 unit of any Enchanteur Deodorant</li>
          <li style={{ marginBottom: "0.75rem" }}>One entry per person - verified via T&G (Taste & Gourmet) account</li>
          <li style={{ marginBottom: "0.75rem" }}>Grand Prize: 15 winners will be selected</li>
          <li style={{ marginBottom: "0.75rem" }}>Consolation prizes: RM28,000 total pool of T&G vouchers</li>
          <li style={{ marginBottom: "0.75rem" }}>Voucher values randomized: RM5 (50%), RM10 (30%), RM20 (15%), RM50 (5%)</li>
          <li style={{ marginBottom: "0.75rem" }}>Winnings will be credited instantly to winners' T&G accounts</li>
          <li style={{ marginBottom: "0.75rem" }}>Winner selection based on random draw from eligible entries</li>
          <li style={{ marginBottom: "0.75rem" }}>Organizer reserves the right to modify terms without prior notice</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "1.5rem",
        color: "#666",
        fontSize: "0.875rem",
      }}>
        <p style={{ marginBottom: "0.5rem" }}>
          Powered by <strong>Buzz</strong> & <strong>Wipro Unza</strong>
        </p>
        <p style={{ opacity: 0.7 }}>
          © 2026 Enchanteur. All rights reserved.
        </p>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}