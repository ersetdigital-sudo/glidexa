// Company name (PT Glidexa Inovasi Digital) hidden for now per customer request.
// DRAFT legal copy. General wording only, to be replaced by the legal team's final version.

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };
export type LegalDoc = { title: string; updated: string; intro: string[]; sections: LegalSection[] };

const CONTACT = 'support@glidexavpn.com';

export const PRIVACY_POLICY: LegalDoc = {
  title: 'PRIVACY POLICY',
  updated: 'Last updated: 31 October 2026',
  intro: [
    'At GlideXAVPN, we respect your privacy. We only collect the information needed to run our service, manage your account, free trial, and subscription, and improve your experience.',
    'This Privacy Policy explains what we collect, what we do not collect, how we use it, and the choices you have. It applies to the GlideXAVPN app and this website.',
  ],
  sections: [
    {
      heading: '1. Information we collect',
      paragraphs: ['We keep the data we hold to the minimum needed to provide the service:'],
      list: [
        'Account data: your email address and the sign-in method you choose (email, Google, or Facebook).',
        'Subscription data: your plan, free trial status, and payment status, provided by Google Play. We never receive your card or bank details.',
        'Device data: device name, model, and app version, so we can apply the device limit of your plan.',
        'Support data: messages you send to our support team.',
        'Basic diagnostics: anonymous crash reports and aggregated server load, used to keep the service stable.',
      ],
    },
    {
      heading: '2. Information we do not collect',
      paragraphs: [
        'We do not sell your personal information, and we do not track what you do while connected. We do not log the websites you visit, the apps or games you use, the content of your traffic, or your DNS queries.',
      ],
    },
    {
      heading: '3. How we use your information',
      paragraphs: ['We use the information above only to:'],
      list: [
        'Create and manage your account and subscription.',
        'Connect you to our servers and apply the device limit of your plan.',
        'Answer your support requests.',
        'Keep the service secure, prevent abuse, and fix technical problems.',
        'Send important service notices, such as changes to these terms.',
      ],
    },
    {
      heading: '4. Sharing',
      paragraphs: [
        'Your data is only shared with trusted service providers when needed to operate our service, such as payment processing through Google Play and cloud hosting, or when required by Indonesian law. These providers may only use the data to deliver their service to us.',
      ],
    },
    {
      heading: '5. Data retention',
      paragraphs: [
        'We keep account and subscription data while your account is active. When you delete your account, we delete or anonymize your personal data within a reasonable period, except where the law requires us to keep it longer.',
      ],
    },
    {
      heading: '6. Security',
      paragraphs: [
        'Your data is protected with reasonable security measures, including encrypted connections and restricted access. No system is fully risk free, so we keep reviewing and testing our security.',
      ],
    },
    {
      heading: '7. Your rights',
      paragraphs: [
        'In line with Indonesia\'s Personal Data Protection Law (UU No. 27 Tahun 2022), you can ask to access, correct, or delete your personal data, or withdraw your consent, by contacting us at ' +
          CONTACT +
          '.',
      ],
    },
    {
      heading: '8. Children',
      paragraphs: [
        'GlideXAVPN is not intended for children under 13. If you believe a child has given us personal data, contact us and we will delete it.',
      ],
    },
    {
      heading: '9. Changes to this policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. We will post the new version on this page and update the date above. By using GlideXAVPN, you agree to this Privacy Policy.',
      ],
    },
    {
      heading: '10. Contact',
      paragraphs: ['Questions? Contact us at ' + CONTACT + '.'],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: 'TERMS & CONDITIONS',
  updated: 'Last updated: 31 October 2026',
  intro: [
    'These Terms & Conditions govern your use of the GlideXAVPN app and website. By downloading or using GlideXAVPN, you agree to these terms. If you do not agree, please do not use the service.',
  ],
  sections: [
    {
      heading: '1. The service',
      paragraphs: [
        'GlideXAVPN is a VPN service designed to give you a more stable and private connection for gaming, streaming, and everyday browsing. Connection quality depends on your network, location, and the game servers you connect to, so we cannot guarantee a specific ping or speed.',
      ],
    },
    {
      heading: '2. Your account',
      paragraphs: [
        'You need an account to use GlideXAVPN. You are responsible for keeping your login details safe and for all activity on your account. Please tell us right away if you think your account has been used without your permission.',
      ],
    },
    {
      heading: '3. Free trial, subscriptions and billing',
      paragraphs: ['Subscriptions are sold and billed through Google Play.'],
      list: [
        'New users get a 7-day free trial. If you do not cancel before the trial ends, your chosen plan starts and you are charged.',
        'Monthly: Rp 49k/month for the first 3 months, then Rp 69k/month.',
        '6 Months: Rp 299k billed once per period. Yearly: Rp 499k billed once per period.',
        'Subscriptions renew automatically until you cancel. You can cancel any time in your Google Play account settings, and access continues until the end of the paid period.',
        'Prices may change. We will tell you before a new price applies to your subscription.',
      ],
    },
    {
      heading: '4. Refunds',
      paragraphs: [
        'Refund requests are handled according to Google Play\'s refund policy. If you have a problem with your subscription, contact us and we will do our best to help.',
      ],
    },
    {
      heading: '5. Device limits',
      paragraphs: [
        'Each plan can be used on a set number of devices at the same time: 3 devices for Monthly and 6 Months, and 4 devices for Yearly. You can manage your devices from the Device Manager in the app.',
      ],
    },
    {
      heading: '6. Acceptable use',
      paragraphs: ['You agree not to use GlideXAVPN to:'],
      list: [
        'Break any applicable law, including Indonesian law.',
        'Send spam, run attacks, spread malware, or harm other networks or users.',
        'Infringe anyone\'s copyright or other rights.',
        'Resell, share, or abuse your account, or try to bypass the device limit.',
        'Reverse engineer, tamper with, or attack the app or our servers.',
      ],
    },
    {
      heading: '7. Suspension and termination',
      paragraphs: [
        'We may suspend or close an account that breaks these terms. You can stop using the service and delete your account at any time.',
      ],
    },
    {
      heading: '8. Intellectual property',
      paragraphs: [
        'The GlideXAVPN name, logo, app, and website content belong to GlideXAVPN. You may not copy or use them without our written permission.',
      ],
    },
    {
      heading: '9. Disclaimer and limitation of liability',
      paragraphs: [
        'The service is provided "as is". To the extent allowed by law, we are not liable for indirect losses, lost data, or lost profits from using or being unable to use GlideXAVPN. Nothing in these terms limits rights you have under Indonesian consumer protection law.',
      ],
    },
    {
      heading: '10. Governing law',
      paragraphs: ['These terms are governed by the laws of the Republic of Indonesia.'],
    },
    {
      heading: '11. Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. We will post the new version on this page and update the date above. If you keep using GlideXAVPN after a change, you accept the updated terms.',
      ],
    },
    {
      heading: '12. Contact',
      paragraphs: ['Questions about these terms? Contact us at ' + CONTACT + '.'],
    },
  ],
};
