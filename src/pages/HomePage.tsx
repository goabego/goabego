import heroAbe from "@/assets/hero-abe.jpg";

export function HomePage() {
  return (
      <div className="rounded-xl border text-card-foreground shadow bg-background flex min-h-screen flex-col overflow-hidden">
        <div className="bg-card flex items-center justify-between border-b px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <div className="size-3 rounded-full bg-green-500"></div>
            </div>
          </div>
        </div>
        <div className=" @container container mx-auto max-w-4xl px-4 py-8">
          <article className="space-y-8">
            <header className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Technology
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                  Web Development
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                  React
                </div>
              </div>
              <h1 className="text-4xl leading-tight font-bold tracking-tight @md:text-5xl @lg:text-6xl">
                The Future of Web Development: Embracing Modern Technologies
              </h1>
              <p className="text-muted-foreground text-xl leading-relaxed">
                Discover how cutting-edge technologies are reshaping the
                landscape of web development, from AI-powered tools to
                revolutionary frameworks that are changing how we build for the
                web.
              </p>
              <div className="flex flex-col justify-between gap-4 pt-4 @sm:flex-row @sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Author"
                      src={heroAbe}
                    />
                  </span>
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-muted-foreground text-sm">
                      Senior Developer
                    </p>
                  </div>
                </div>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-calendar h-4 w-4"
                    >
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                      ></rect>
                      <path d="M3 10h18"></path>
                    </svg>
                    <span>Dec 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
            </header>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            ></div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                alt="Featured image"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="object-cover"
                src={heroAbe}
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="mt-8 mb-4 text-2xl font-bold">
                The Evolution of Modern Frameworks
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <blockquote className="border-primary my-6 border-l-4 pl-6 text-lg italic">
                "The best way to predict the future is to create it. In web
                development, we're not just following trends—we're setting
                them."
              </blockquote>
              <h3 className="mt-6 mb-3 text-xl font-semibold">
                Key Technologies Shaping the Future
              </h3>
              <ul className="my-4 space-y-2">
                <li>
                  Artificial Intelligence and Machine Learning integration
                </li>
                <li>Edge computing and serverless architectures</li>
                <li>Progressive Web Applications (PWAs)</li>
                <li>WebAssembly for high-performance applications</li>
                <li>Advanced CSS features and container queries</li>
              </ul>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
              <div className="my-8">
                <div className="rounded-xl border bg-card text-card-foreground shadow">
                  <div className="p-6">
                    <h4 className="mb-2 font-semibold">💡 Pro Tip</h4>
                    <p className="text-muted-foreground text-sm">
                      Always stay updated with the latest web standards and
                      best practices. The web development landscape evolves
                      rapidly, and continuous learning is key to staying
                      relevant.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="mt-8 mb-4 text-2xl font-bold">Looking Ahead</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet.
              </p>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
            </div>
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] w-full"
            ></div>
            <div className="flex flex-col items-start justify-between gap-4 @sm:flex-row @sm:items-center">
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-heart h-4 w-4"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                  <span>42</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle h-4 w-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>12</span>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-share2 lucide-share-2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line
                      x1="8.59"
                      x2="15.42"
                      y1="13.51"
                      y2="17.49"
                    ></line>
                    <line
                      x1="15.41"
                      x2="8.59"
                      y1="6.51"
                      y2="10.49"
                    ></line>
                  </svg>
                  <span>Share</span>
                </button>
              </div>
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bookmark h-4 w-4"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                </svg>
                <span>Save for later</span>
              </button>
            </div>
            <div className="rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6">
                <div className="flex flex-col gap-4 @sm:flex-row">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Author"
                      src={heroAbe}
                    />
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Jane Doe</h3>
                    <p className="text-muted-foreground mb-2">
                      Senior Developer & Tech Writer
                    </p>
                    <p className="text-sm">
                      Jane is a passionate developer with over 8 years of
                      experience in web development. She specializes in React,
                      TypeScript, and modern web technologies. When she's not
                      coding, you can find her writing about the latest trends
                      in tech.
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs self-start">
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
  );
}
