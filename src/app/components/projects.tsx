import Image from "next/image"

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Projects */}
      <h2 className="text-xl font-bold uppercase tracking-widest  text-white-1 mb-2">
        PROJECTS
      </h2>
      <ul className="mt-4">
        <li className="mb-12">
          <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
            <Image
              src="/images/etchmon-acid.png"
              alt="Placeholder"
              width={200}
              height={100}
              className="sm:col-span-2 sm:order-1 sm:translate-y-1"
            />
            <div className="sm:col-span-6 sm:order-2">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=etchmon-dev.etchmon-acid"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Etchmon Acid (opens in a new tab)"
                title="Etchmon Acid"
              >
                <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                  Etchmon Acid VS Code Theme
                </h3>
              </a>
              <p className="mt-2 text-frost-3 text-sm">
                A custom VS Code theme using high contrast colors on a dark
                theme to emphasize readability and lessen eye strain. It is
                available on VS Code MarketPlace and is continually being worked
                on.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    JavaScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Node.js
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    CSS
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="mb-12">
          <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
            <Image
              src="/images/cbd.png"
              alt="Placeholder"
              width={200}
              height={100}
              className="sm:col-span-2 sm:order-1 sm:translate-y-1"
            />
            <div className="sm:col-span-6 sm:order-2">
              <a
                href="https://nextjs-cookbook-cngdvy0e5-etchmon.vercel.app/"
                className="cursor-pointer"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="CookBook Digital (opens in a new tab)"
                title="CookBook Digital"
              >
                <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                  CookBook Digital - Social Media Cookbook
                </h3>
              </a>
              <p className="mt-2 text-frost-3 text-sm">
                Explore and Share Recipes with this dynamic Full-Stack Next.js
                project designed for culinary enthusiasts. With Next-Auth
                integration, users can sign in with custom credentials or Google
                accounts to save their favorite recipes securely on MongoDB. The
                project serves as a playground for mastering Next.js
                functionalities, including Server-Side functions, while
                fostering a vibrant community of food lovers.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Next.js
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    React
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Tailwind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    MongoDB
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Next-Auth
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Vercel
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Mongoose
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Node
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="mb-12">
          <div className="relative grid sm:grid-cols-8 pb-1 gap-4 sm:gap-8 md:gap-4">
            <Image
              src="/images/homepage.png"
              alt="Placeholder"
              width={200}
              height={100}
              className="sm:col-span-2 sm:order-1 sm:translate-y-1"
            />

            <div className="sm:col-span-6 sm:order-2">
              <a
                href="jamesetchells.com"
                target="_blank"
                className="cursor-pointer"
              >
                <h3 className="text-md font-bold text-white-1 hover:text-aurora-3 max-w-fit">
                  jamesetchells.com
                </h3>
              </a>
              <p className="mt-2 text-frost-3 text-sm">
                My personal website, deployed on Cloudflare Pages with DNS
                redirects to my custom domain name. Developed using Next.js and
                Tailwind CSS and implements a GitHub Actions CI/CD pipepline
                that triggers on successful PR merges and deploys to production
                using Wrangler.
              </p>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    TypeScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Next.js
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Tailwind CSS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Node.js
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Cloudflare
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    Wrangler
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="rounded-full flex items-center bg-dark-3 px-3 py-1 text-xs font-medium leading-5 text-aurora-3">
                    GitHub Actions
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}
