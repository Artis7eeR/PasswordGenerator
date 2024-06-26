import { Helmet } from "react-helmet";
import { Text } from "@chakra-ui/react";

export default function PrivacyPolicy() {
  return (
    <div className="page-content">
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <Text as="b"  fontSize={20} marginBottom={6} className="page-title">
        Privacy Policy
      </Text>
      
      <p>
        Abdul Razaq A operates the website "Secure Password Generator" at
        passwordgenerator.artis7eer.live. I take your privacy seriously. To
        better protect your privacy, I provide this privacy policy notice
        explaining the way your personal information is collected and used.
      </p>
      <p>
        <strong>Collection of Routine Information</strong>
      </p>
      <p>
        This website track basic information about its visitors. This
        information includes, but is not limited to, IP addresses, browser
        details, timestamps and referring pages. None of this information can
        personally identify specific visitors to this website. The information
        is tracked for routine administration and maintenance purposes.
      </p>
      <p>
        <strong>Cookies</strong>
      </p>
      <p>
        Where necessary, this website uses cookies to store information about a
        visitor’s preferences and history to better serve the visitor and/or
        present the visitor with customized content.
      </p>
      <p>
        <strong>Advertisement and Other Third Parties</strong>
      </p>
      <p>
        Advertising partners and other third parties may use cookies, scripts
        and/or web beacons to track visitor activities on this website to
        display advertisements and other useful information. Such tracking is
        done directly by the third parties through their servers and is subject
        to their privacy policies. This website has no access or control over
        these cookies, scripts and/or web beacons that may be used by third
        parties.
      </p>
      <div>
        <p>
          I have included links on this website for your use and reference. I am
          not responsible for the privacy policies on these websites. You should
          be aware that the privacy policies of these websites may differ from
          my own.
        </p>
        <p>
          Link to the privacy policy of third-party service providers used by
          the website
        </p>
        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics
            </a>
          </li>
          <li>
           <a href="https://adsterra.com/privacy-policy-managed/"
            target="_blank"
            rel="noopener noreferrer"
            >Adsterra
            </a>
          </li>
   
        </ul>
      </div>
      <p>
        <strong>Security</strong>
      </p>
      <p>
        The security of your personal information is important to me, but
        remember that no method of transmission over the Internet, or method of
        electronic storage, is 100% secure. While I strive to use commercially
        acceptable means to protect your personal information, I cannot
        guarantee its absolute security.
      </p>
      <p>
        <strong>Changes To This Privacy Policy</strong>
      </p>
      <p>
        This Privacy Policy is effective as of 2023-03-05 and will remain in
        effect except concerning any changes in its provisions in the future,
        which will be in effect immediately after being posted on this page. I
        reserve the right to update or change my Privacy Policy at any time and
        you should check this Privacy Policy periodically. If I make any
        material changes to this Privacy Policy, I will notify you either
        through the email address you have provided me or by placing a prominent
        notice on my website.
      </p>
      <p>
        <strong>Contact Information</strong>
      </p>
      <p>
        For any questions or concerns regarding the privacy policy, please send
        me an email at artis7eer+passgen[at]gmail[dot]com.
      </p>
     
    </div>
  );
}
