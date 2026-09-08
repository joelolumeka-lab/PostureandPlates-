export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Posture and Plate',
}

export default function Privacy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Privacy Policy
        </h1>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-invert">
        <p>Last updated: September 2026</p>
        <p>
          This website (postureandplate.com) does not collect personal
          information beyond standard, anonymous analytics data (such as page
          views) used to understand how visitors use the site.
        </p>
        <p>
          We do not sell, share, or rent any personal information to third
          parties. If you contact us directly via email, your message and
          email address are used only to respond to your inquiry.
        </p>
        <p>
          This site may use cookies for basic functionality and analytics.
          You can disable cookies through your browser settings at any time.
        </p>
        <p>
          If you have questions about this policy, please reach out via our{' '}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </div>
  )
}
