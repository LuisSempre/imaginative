import { MailIcon, PhoneIcon } from '@heroicons/react/outline'
import { Container } from '@/components/Container'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="py-20 bg-slate-900 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" />
              <span className="relative">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            It doesn’t matter what size your business is, our software won’t
            work well for you.
          </p>
        </div>


          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 className="sr-only">Contact us</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">
                    Send us a message
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="block w-full px-4 py-3 text-gray-900 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-gray-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full px-4 py-3 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </section>
  )
}
