// import { useI18n } from 'next-localization';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
// import config from 'renderings/config';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
// const publicUrl = config.publicUrl;

const Navigation = (): JSX.Element => {
  // const { t } = useI18n();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isArabic, setIsArabic] = useState(router.locale === 'en');
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.style.display = isMobileMenuOpen ? 'block' : 'none';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleLangSwitch = () => {
    const newLocale = isArabic ? 'ar' : 'en';
    setIsArabic(!isArabic);
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  return (
    <div className="container d-flex justify-content-between fixed-top border-bottom">
      <nav className="navbar navbar-expand-md w-100">
        <a className="btn btn-primary" href="#" role="button">
          Stay Connected
        </a>
        <div className="collapse navbar-collapse">
          <div className="form-check form-switch">
            <span className="custom-label">عر</span>
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked={isArabic}
              onChange={handleLangSwitch}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              En
            </label>
          </div>
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR STORY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                LEARN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="mobile-trigger">
          <span>Our Story</span>
          <button className="open-mobile-mneu" onClick={toggleMobileMenu}>
            <img src="/images/menu-toggle-btn.svg" alt="todo" />
          </button>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
          <div className="mobile-menu-header">
            <img
              src="/images/guggenheim-abu-dhabi-logo-m.svg"
              className="mobile-menu-logo"
              alt=""
            />
            <div className="mobile-trigger">
              <span>Our Story</span>
              <button className="close-mobile-mneu" onClick={toggleMobileMenu}>
                <img src="/images/menu-toggle-btn.svg" alt="todo" />
              </button>
            </div>
            <a className="btn btn-primary" href="#" role="button">
              Stay Connected
            </a>
          </div>
          <div className="mobile-menu-list">
            <div className="form-check form-switch">
              <span className="custom-label">عر</span>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked1"
                checked={isArabic}
                onChange={handleLangSwitch}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked1">
                En
              </label>
            </div>
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our story
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learn
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu-footer">
            <img src="/images/guggenheim-abu-dhabi-logo.svg" className="" alt="" />
          </div>
        </div>
        <div className="mobile-menu-overlay" ref={overlayRef} onClick={toggleMobileMenu}></div>
        <div className="hero-logos">
          <img src="/images/guggenheim-abu-dhabi-logo.svg" className="desktop-logo" alt="" />
          <img src="/images/guggenheim-abu-dhabi-logo-m.svg" className="mobile-logo" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
