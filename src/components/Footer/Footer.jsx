import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const BOT_TOKEN = "7217181356:AAFN-P-tG-F_A0ZzR3iMDA0sIUBeadE3R5c"; // Bot tokeningizni kiriting
  const CHAT_ID = "6992354984"; // Telegram ID ni kiriting

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);

    const text = `📝 Yangi xabar! \n\n👤 Ism: ${formData.name} \n📧 Email: ${formData.email} \n✉️ Xabar: ${formData.message}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      });

      setIsModalOpen(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Xatolik yuz berdi:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <footer>
      <div className="bg-left">
        <img src="bg-header-left.png" alt="" />
      </div>

      <div className="container_footer" id="concat">
        <div className="footer_parent">
          <div className="text">
            <h1>Contact</h1>
            <p>
              I would love to hear about your project and how I <br /> could
              help. Please fill in the form, and I’ll get back <br /> to you as
              soon as possible.
            </p>
          </div>

          <form onSubmit={sendMessage}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="EMAIL"
          placeholder="Emailingiz"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="MASSAGE"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="btn-form">

        <button type="submit" disabled={loading}>
          {loading ? "Loadding..." : "SEND MESSAGE"}
        </button>
        </div>
      </form>
      
        </div>

        <div className="footer_end">
          <h1>adamkeyes</h1>

          <div className="nav_link">
  <a href="https://github.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <SiMeta />
  </a>
  <a href="https://www.linkedin.com/in/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://twitter.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
</div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
