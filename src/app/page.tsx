import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enchanteur Contest 2026 | Shop & Win Enchanting Prizes",
  description: "Purchase any Enchanteur product worth RM25 and stand a chance to win amazing prizes. Contest period: May 1-31, 2026.",
  icons: {
    icon: "/enchanteur-logo.png",
  },
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Playfair Display', 'Outfit', 'Georgia', serif",
      background: "#FAF5F3",
      color: "#2D1A1F",
      margin: 0,
      padding: 0,
    }}>
      {/* Hero Section */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Background Image */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}>
          <img 
            src="/hero-bg.jpg" 
            alt="Enchanteur fragrance collection" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, rgba(45,26,31,0.6) 0%, rgba(45,26,31,0.4) 50%, rgba(45,26,31,0.7) 100%)",
          }} />
        </div>

        {/* Content */}
        <div style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "2rem",
          maxWidth: "800px",
        }}>
          <img 
            src="/enchanteur-logo.svg" 
            alt="Enchanteur" 
            style={{
              height: "clamp(48px, 8vw, 80px)",
              marginBottom: "2rem",
              filter: "brightness(0) invert(1)",
            }}
          />
          
          <p style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}>
            May 1 – 31, 2026
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
            color: "white",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}>
            Shop & Win <br />
            <span style={{ fontStyle: "italic", color: "#E8C872" }}>Enchanting</span> Prizes
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.8)",
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            maxWidth: "500px",
            margin: "0 auto 2.5rem",
            fontWeight: 300,
          }}>
            Purchase any Enchanteur product worth RM25 and stand a chance to win amazing prizes.
          </p>

          <a 
            href="#how-to-participate"
            style={{
              display: "inline-block",
              background: "#E8C872",
              color: "#2D1A1F",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
          >
            How to Participate
          </a>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}>
          <div style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))",
          }} />
        </div>
      </section>

      {/* Prizes Section */}
      <section style={{
        padding: "6rem 1.5rem",
        background: "#F5EDE8",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{
              color: "#C9A85C",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              What You Can Win
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#2D1A1F",
            }}>
              Prizes
            </h2>
          </div>

          {/* Grand Prize Card */}
          <div style={{
            background: "white",
            border: "1px solid #E8DCD6",
            borderRadius: "8px",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            textAlign: "center",
            marginBottom: "2rem",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(to right, transparent, #C9A85C, transparent)",
            }} />
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🏆</div>
            <p style={{
              color: "#666",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}>
              Grand Prize
            </p>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#2D1A1F",
              marginBottom: "0.75rem",
            }}>
              15 Lucky Winners
            </h3>
            <p style={{
              color: "#666",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
            }}>
              Stand a chance to be one of the 15 grand prize winners.
            </p>
          </div>

          {/* Consolation Prizes Card */}
          <div style={{
            background: "white",
            border: "1px solid #E8DCD6",
            borderRadius: "8px",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(to right, transparent, #A83250, transparent)",
            }} />
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎁</div>
            <p style={{
              color: "#666",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}>
              Consolation Prizes
            </p>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              color: "#2D1A1F",
              marginBottom: "0.5rem",
            }}>
              T&G eWallet Vouchers
            </h3>
            <p style={{
              color: "#666",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              marginBottom: "2.5rem",
            }}>
              Total prize pool of <span style={{ color: "#2D1A1F", fontWeight: 500 }}>RM28,000</span> · Instant disbursement to winners
            </p>

            {/* Voucher Tiers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
            }}>
              {["RM50", "RM20", "RM10", "RM5"].map((amount, i) => (
                <div key={i} style={{
                  border: "1px solid #E8DCD6",
                  borderRadius: "8px",
                  padding: "1.5rem 1rem",
                  textAlign: "center",
                  transition: "all 0.3s",
                }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    color: "#2D1A1F",
                  }}>
                    {amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section id="how-to-participate" style={{
        padding: "6rem 1.5rem",
        background: "#FAF5F3",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{
              color: "#C9A85C",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              3 Simple Steps
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#2D1A1F",
            }}>
              How to Participate
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
          }}>
            {[
              { num: "01", img: "/step-purchase.jpg", title: "Purchase", desc: "Buy a minimum of RM25 worth of any Enchanteur product." },
              { num: "02", img: "/step-scan.jpg", title: "Scan", desc: "Scan this QR code to participate or click on the link below." },
              { num: "03", img: "/step-submit.jpg", title: "Submit", desc: "Fill in your details and upload a photo of your purchase receipt." },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", marginBottom: "2rem" }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "5rem",
                    color: "#E8DCD6",
                    position: "absolute",
                    top: "-1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 0,
                  }}>
                    {step.num}
                  </span>
                  <div style={{
                    position: "relative",
                    zIndex: 1,
                    width: "160px",
                    height: "160px",
                    margin: "1.5rem auto 0",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  }}>
                    <img 
                      src={step.img} 
                      alt={step.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  color: "#2D1A1F",
                  marginBottom: "0.75rem",
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: "#666",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 300,
                  lineHeight: 1.6,
                  maxWidth: "280px",
                  margin: "0 auto",
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Section */}
      <section style={{
        padding: "6rem 1.5rem",
        background: "#F5EDE8",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{
              color: "#C9A85C",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              Ready to Win?
            </p>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#2D1A1F",
            }}>
              Submit Your Receipt
            </h2>
          </div>

          <div style={{
            background: "white",
            border: "1px solid #E8DCD6",
            borderRadius: "8px",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            textAlign: "center",
            position: "relative",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(to right, transparent, #C9A85C, transparent)",
            }} />

            <p style={{
              color: "#666",
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              marginBottom: "2.5rem",
              maxWidth: "400px",
              margin: "0 auto 2.5rem",
            }}>
              Scan the QR code below or tap the link to submit your purchase receipt and enter the contest.
            </p>

            {/* QR Code Placeholder */}
            <div style={{
              display: "inline-block",
              background: "white",
              padding: "1.25rem",
              borderRadius: "12px",
              marginBottom: "2rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://enchanteur.com.my/contest-submit" 
                alt="QR Code"
                style={{ width: "180px", height: "180px" }}
              />
            </div>

            <div>
              <a 
                href="https://enchanteur.com.my/contest-submit"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#E8C872",
                  color: "#2D1A1F",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "1rem 2.5rem",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
              >
                Submit Now ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: "4rem 1.5rem",
        background: "#2D1A1F",
        textAlign: "center",
      }}>
        <img 
          src="/enchanteur-logo.svg" 
          alt="Enchanteur" 
          style={{
            height: "32px",
            marginBottom: "1.5rem",
            filter: "brightness(0) invert(1)",
          }}
        />
        <p style={{
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.875rem",
          marginBottom: "0.5rem",
        }}>
          Contest Period: May 1 – 31, 2026
        </p>
        <p style={{
          color: "rgba(255,255,255,0.4)",
          fontFamily: "'Outfit', sans-serif",
          fontSize: "0.75rem",
        }}>
          Terms & conditions apply. Prizes are given randomly via instant disbursement.
        </p>
        <div style={{
          marginTop: "2rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          <a 
            href="https://enchanteur.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "0.75rem",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
          >
            enchanteur.com.my
          </a>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </div>
  );
}