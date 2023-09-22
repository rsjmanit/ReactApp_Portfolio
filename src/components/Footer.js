import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icon_2.webp";
import navIcon3 from "../assets/img/icon_33.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icon footer-social-icon">
        <a href="https://www.linkedin.com/in/rahul-singh-jadon-157005161/">
          <img src={navIcon1} alt="LinkedIn URL" />
        </a>
        <a href="https://github.com/rsjmanit">
          <img src={navIcon2} alt="GitHub URL" className="social-icon-git" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rahul.jadon74096@gmail.com"
          target="_blank"
        >
          <img src={navIcon3} alt="Email Me" className="social-icon-git" />
        </a>
      </div>
      <div>
        <p>Copyright &copy; 2023. All Rights Reserved</p>
      </div>
    </footer>
  );
};
