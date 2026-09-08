
export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Posture and Plate',
}

export default function Contact() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
      </div>
      <div className="prose max-w-none pt-8 pb-8 dark:prose-invert">
        <p>
          Have a question, suggestion, or just want to say hello? Reach out
          anytime at{' '}
          <a href="mailto:youremail@example.com">joelolumeka@gmail.com</a>.
        </p>
      </div>
    </div>
  )
}
