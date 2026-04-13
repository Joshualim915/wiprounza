import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enchanteur Contest 2026 | Shop & Win Enchanting Prizes",
  description: "Purchase any Enchanteur product worth RM25 and stand a chance to win amazing prizes. Contest period: May 1-June 30, 2026.",
  icons: {
    icon: "/enchanteur-logo.png",
  },
};

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Playfair Display', 'Outfit', 'Georgia', serif",
      background: "#FAF5F3",
      color: "#2D1A1F",
      margin: 0,
      padding: 0,
    }}>
      {/* Hero Section */}
      <section className="heroSection" style={{
        order: 1,
        position: "relative",
        minHeight: "100vh",
        background: "#000",
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
            className="heroBgImage"
            src="/hero-bg-deodoran-mobile.jpg" 
            alt="Enchanteur fragrance collection" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              background: "#000",
            }}
          />
        </div>

        {/* Bottom Content Overlay */}
        <div className="heroBottomOverlay" style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          padding: "clamp(1.5rem, 4vw, 3rem) 1.25rem 2rem",
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,0) 100%)",
        }}>
          <div className="heroBottomContent" style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}>
            <p className="heroPeriod" style={{
              color: "rgba(255,255,255,0.78)",
              fontFamily: "'Outfit', sans-serif",
              fontSize: "clamp(0.72rem, 1.8vw, 0.85rem)",
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}>
              May 1 - June 30, 2026
            </p>

            <h1 className="heroTitle" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 4.8vw, 2.7rem)",
              color: "white",
              lineHeight: 1.15,
              marginBottom: "0.75rem",
            }}>
              Shop & Win
              <br />
              <span style={{ fontStyle: "italic", color: "#E8C872" }}>Enchanting Prizes</span>
            </h1>

            <a
              className="heroCta heroCtaDesktop"
              href="#submit-section"
              style={{
                background: "#E8C872",
                color: "#2D1A1F",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.72rem 1.8rem",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Submit Here
            </a>
            <a
              className="heroCta heroCtaMobile"
              href="https://enchanteur.com.my/contest-submit"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#E8C872",
                color: "#2D1A1F",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.72rem 1.8rem",
                textDecoration: "none",
                transition: "all 0.3s",
              }}
            >
              Submit Here
            </a>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section style={{
        order: 3,
        padding: "3.2rem 1rem 5.5rem",
        background: "linear-gradient(180deg, #F9F0EA 0%, #F3E4DE 100%)",
      }}>
        <div style={{ maxWidth: "920px", margin: "0 auto", position: "relative" }}>
          <div style={{
            borderRadius: "28px",
            padding: "clamp(1.8rem, 5vw, 3rem)",
            minHeight: "clamp(460px, 70vw, 640px)",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "url('/prizes-background.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0 20px 35px rgba(102, 39, 59, 0.18)",
            }}>

            <div style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gap: "1.1rem",
            }}>
              <div style={{ textAlign: "center", paddingTop: "1rem" }}>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "#1A1114",
                  fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "0.15rem",
                }}>
                  Menang Hadiah Sejumlah
                </p>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#0E0A0B",
                  fontSize: "clamp(2.1rem, 9vw, 4rem)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}>
                  RM45,000!
                </h2>
                <p style={{
                  fontFamily: "'Outfit', sans-serif",
                  color: "#2D1A1F",
                  fontSize: "clamp(0.88rem, 2.4vw, 1rem)",
                  fontWeight: 600,
                }}>
                  1 May - 30 June 2026
                </p>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.85rem",
              }}>
                <div style={{
                  background: "#F7C600",
                  borderRadius: "14px",
                  padding: "1rem",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}>
                  <div style={{
                    width: "100%",
                    height: "92px",
                    borderRadius: "10px",
                    border: "2px dashed rgba(17, 12, 13, 0.4)",
                    background: "rgba(255,255,255,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: "#332128",
                    marginBottom: "0.85rem",
                  }}>
                    Prize Image 1
                  </div>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(1.1rem, 3.2vw, 1.45rem)",
                    fontWeight: 700,
                    color: "#0F0B0C",
                    marginBottom: "0.35rem",
                  }}>
                    Hadiah Utama
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#1A1114",
                    fontSize: "clamp(0.95rem, 2.4vw, 1.06rem)",
                    lineHeight: 1.45,
                  }}>
                    5 Pemenang Mesin IPL Ulike Air10 Pro Bernilai <strong>RM3,600</strong>
                  </p>
                </div>

                <div style={{
                  background: "#F7C600",
                  borderRadius: "14px",
                  padding: "1rem",
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
                }}>
                  <div style={{
                    width: "100%",
                    height: "92px",
                    borderRadius: "10px",
                    border: "2px dashed rgba(17, 12, 13, 0.4)",
                    background: "rgba(255,255,255,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: "#332128",
                    marginBottom: "0.85rem",
                  }}>
                    Prize Image 2
                  </div>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "clamp(1.1rem, 3.2vw, 1.45rem)",
                    fontWeight: 700,
                    color: "#0F0B0C",
                    marginBottom: "0.35rem",
                  }}>
                    Hadiah Sagu Hati
                  </p>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#1A1114",
                    fontSize: "clamp(0.95rem, 2.4vw, 1.06rem)",
                    lineHeight: 1.45,
                  }}>
                    Baucar RM5-RM50 Touch &apos;n Go Sejumlah <strong>RM27,000</strong>
                  </p>
                </div>
              </div>

              <div style={{
                background: "#F3F3F3",
                borderRadius: "16px",
                border: "1px solid rgba(0,0,0,0.12)",
                padding: "0.9rem",
                display: "grid",
                gridTemplateColumns: "30% 70%",
                gap: "0.75rem",
                alignItems: "end",
                minHeight: "220px",
              }}>
                <img
                  src="/enchanteur-deo.jpeg"
                  alt="Enchanteur deodorant"
                  style={{
                    width: "100%",
                    height: "clamp(180px, 34vw, 230px)",
                    objectFit: "contain",
                    objectPosition: "center bottom",
                    background: "transparent",
                    borderRadius: 0,
                  }}
                />

                <div style={{ display: "grid", gap: "0.85rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.55rem" }}>
                    <span style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "999px",
                      background: "#F7C600",
                      color: "#111",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      1
                    </span>
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "#121212",
                      fontSize: "clamp(1.05rem, 2.6vw, 1.55rem)",
                      lineHeight: 1.2,
                      fontWeight: 800,
                    }}>
                      Beli produk Enchanteur bernilai RM25 <span style={{ fontWeight: 500 }}>dalam satu resit (termasuk 1 unit deodoran)</span>
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "34px 74px 1fr", gap: "0.55rem", alignItems: "center" }}>
                    <span style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "999px",
                      background: "#F7C600",
                      color: "#111",
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      2
                    </span>
                    <img
                      src="/WiproUnza%20x%20Buzz_QR%20Code.jpeg"
                      alt="QR code"
                      style={{
                        width: "74px",
                        height: "74px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "#fff",
                      }}
                    />
                    <p style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: "#121212",
                      fontSize: "clamp(1.05rem, 2.6vw, 1.55rem)",
                      lineHeight: 1.15,
                      fontWeight: 800,
                    }}>
                      Imbas kod QR <span style={{ fontWeight: 500 }}>untuk hantar resit</span>
                    </p>
                  </div>

                  <p style={{
                    fontFamily: "'Outfit', sans-serif",
                    color: "#6E6E6E",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    marginTop: "0.15rem",
                  }}>
                    *Tertakluk terma & syarat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section id="how-to-participate" style={{
        order: 4,
        display: "none",
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
      <section id="submit-section" style={{
        order: 2,
        padding: "3.8rem 1.5rem 2.4rem",
        background: "linear-gradient(to bottom, #0A0A0A 0%, #2A2624 12%, #F5EDE8 32%, #F5EDE8 100%)",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
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
              Beli produk Enchanteur bernilai RM25 dalam satu resit (termasuk 1 unit deodoran). Imbas kod QR untuk hantar resit.
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
        order: 5,
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
          Contest Period: May 1 - June 30, 2026
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
        html { scroll-behavior: smooth; }
        .heroCtaDesktop { display: inline-block; }
        .heroCtaMobile { display: none; }
        @media (max-width: 767px) {
          .heroSection {
            min-height: calc(100vw * 0.67 + 170px) !important;
          }
          .heroBgImage {
            object-fit: contain !important;
            object-position: center top !important;
          }
          .heroBottomOverlay {
            min-height: clamp(220px, 34vh, 300px) !important;
            display: flex !important;
            align-items: flex-end !important;
            padding: 0.45rem 1rem 1.05rem !important;
            background: linear-gradient(to top, rgba(0,0,0,0.995) 0%, rgba(0,0,0,0.97) 28%, rgba(0,0,0,0.9) 52%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0.14) 90%, rgba(0,0,0,0) 100%) !important;
          }
          .heroBottomContent {
            max-width: 520px !important;
          }
          .heroPeriod {
            margin-bottom: 0.22rem !important;
          }
          .heroTitle {
            font-size: clamp(1.45rem, 7vw, 2.1rem) !important;
            line-height: 1.03 !important;
            margin-bottom: 0.38rem !important;
          }
          .heroCtaDesktop { display: none; }
          .heroCtaMobile { display: inline-block; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }
      `}</style>
    </div>
  );
}
