import { CheckIcon } from '@heroicons/react/outline'

const features = [
  'Middle School and High School English',
  'Middle School Mathematics',
  'Middle School History',
  'Middle School Social Studies',
  'Studying Strategies',
  'Writing Skills',
  'Organizational Skills',
  'Reading Comprehension Skills',
  'Special Education',
  'Healthy Studying Habits'
]

function Pricing() {
  return (
    <div id='Pricing' className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="pb-16 xl:flex xl:items-center xl:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
              <span className="text-gray-900">Everything you need for </span>
              <span className="text-indigo-600">$99 per hour</span>
            </h1>
            <p className="mt-5 text-xl text-gray-500">
              Includes personalized student development plans.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
          <div>
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Everything you need</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one tutoring</p>
            <p className="mt-4 text-lg text-gray-500">
              I can teach a wide range of subjects and can aid students address their weaknesses and develop upon their strengths
            </p>
          </div>
          <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
            <ul className="divide-y divide-gray-200">
              {features.slice(0, 5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
            <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
              {features.slice(5).map((feature, featureIdx) =>
                featureIdx === 0 ? (
                  <li key={feature} className="py-4 flex md:border-t-0 md:py-0 md:pb-4">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                ) : (
                  <li key={feature} className="py-4 flex">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                    <span className="ml-3 text-base text-gray-500">{feature}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing