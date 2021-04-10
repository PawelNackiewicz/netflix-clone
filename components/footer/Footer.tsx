import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.title}>Questions? Contact us.</p>
      <div className={styles.break} />
      <div className={styles.row}>
        <div className={styles.row}>
          <a className={styles.footerLink} href="#">
            FAQ
          </a>
          <a className={styles.footerLink} href="#">
            Investor Relations
          </a>
          <a className={styles.footerLink} href="#">
            Ways to Watch
          </a>
          <a className={styles.footerLink} href="#">
            Corporate Information
          </a>
          <a className={styles.footerLink} href="#">
            Netflix Originals
          </a>
        </div>

        <div className={styles.row}>
          <a className={styles.footerLink} href="#">
            Help Centre
          </a>
          <a className={styles.footerLink} href="#">
            Jobs
          </a>
          <a className={styles.footerLink} href="#">
            Terms of Use
          </a>
          <a className={styles.footerLink} href="#">
            Contact Us
          </a>
        </div>

        <div className={styles.row}>
          <a className={styles.footerLink} href="#">
            Account
          </a>
          <a className={styles.footerLink} href="#">
            Redeem gift cards
          </a>
          <a className={styles.footerLink} href="#">
            Privacy
          </a>
          <a className={styles.footerLink} href="#">
            Speed Test
          </a>
        </div>

        <div className={styles.row}>
          <a className={styles.footerLink} href="#">
            Media Centre
          </a>
          <a className={styles.footerLink} href="#">
            Buy gift cards
          </a>
          <a className={styles.footerLink} href="#">
            Cookie Preferences
          </a>
          <a className={styles.footerLink} href="#">
            Legal Notices
          </a>
        </div>
      </div>
      <div className={styles.break} />
      <p className={styles.text}>Netflix United Kingdom</p>
    </div>
  );
}
