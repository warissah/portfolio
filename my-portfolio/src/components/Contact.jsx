"use client";

import { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const DISCORD_USERNAME = "wthila";

const contacts = [
  {
    label: "GITHUB",
    type: "CODE ARCHIVE",
    status: "VERIFIED",
    href: "https://github.com/warissah",
    icon: <FaGithub />,
  },
  {
    label: "LINKEDIN",
    type: "PROFESSIONAL NETWORK",
    status: "VERIFIED",
    href: "https://www.linkedin.com/in/warissa-hossain-0b4384330/",
    icon: <FaLinkedin />,
  },
  {
    label: "DISCORD",
    type: "DIRECT TRANSMISSION",
    status: "ONLINE",
    username: "wthila",
    copy: true,
    icon: <FaDiscord />,
  },
  {
    label: "EMAIL",
    type: "SECURE MESSAGE",
    status: "OPEN",
    href: "mailto:warissahossain@gmail.com",
    icon: <MdEmail />,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleDiscordCopy = async (e, item) => {
    if (!item.copy) return;

    e.preventDefault();

    try {
      await navigator.clipboard.writeText(item.username);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="contact-kicker">CONTACT_LINKS.EXE</p>

        <h2>4 verified channels found</h2>

        <p className="contact-subtitle">
          Hover a channel to lock transmission.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((item, index) => (
          <a
            key={item.label}
            href={item.copy ? "#" : item.href}
            target={item.copy ? undefined : "_blank"}
            rel={item.copy ? undefined : "noopener noreferrer"}
            className="contact-card"
            onClick={(e) => handleDiscordCopy(e, item)}
          >
            <span className="target-corner tl" />
            <span className="target-corner tr" />
            <span className="target-corner bl" />
            <span className="target-corner br" />

            <div className="contact-icon">{item.icon}</div>

            <span className="channel-id">CHANNEL_0{index + 1}</span>

            <h3>{item.label}</h3>

            <div className="hidden-data">
              <p>{item.type}</p>
              <p>STATUS: {item.status}</p>

              {item.copy ? (
                <p>{copied ? "ID COPIED ✓" : `COPY ID: ${item.username}`}</p>
              ) : (
                <p>OPEN CHANNEL ↗</p>
              )}
            </div>
          </a>
        ))}
      </div>

      <p className="contact-footer">
        END OF DOSSIER · IDENTITY VERIFIED
      </p>
    </section>
  );
}